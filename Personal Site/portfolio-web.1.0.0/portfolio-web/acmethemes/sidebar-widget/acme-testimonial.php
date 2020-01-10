<?php
/**
 * Class for adding Testimonial Section Widget
 *
 * @package Acme Themes
 * @subpackage Portfolio Web
 * @since 1.0.0
 */
if ( ! class_exists( 'Portfolio_Web_Testimonial' ) ) {

    class Portfolio_Web_Testimonial extends WP_Widget {
        /*defaults values for fields*/
        private $defaults = array(
            'unique_id'             => '',
            'title'                 => '',
            'at_all_page_items'     => '',
            'content_from'          => 'excerpt',
            'content_number'        => -1,
            'column_number'         => 4,
            'bg_image'              => ''
        );

        function __construct() {
            parent::__construct(
                    /*Base ID of your widget*/
                    'portfolio_web_testimonial',
                    /*Widget name will appear in UI*/
                    esc_html__('AT Testimonial Section', 'portfolio-web'),
                    /*Widget description*/
                    array(
                            'description' => esc_html__( 'Show Testimonial Section.', 'portfolio-web' )
                    )
            );
        }

        /*Widget Backend*/
        public function form( $instance ) {
            $instance               = wp_parse_args( (array) $instance, $this->defaults );
            /*default values*/
            $unique_id              = esc_attr( $instance[ 'unique_id' ] );
            $title                  = esc_attr( $instance[ 'title' ] );
	        $at_all_page_items      = $instance['at_all_page_items'];
	        $content_from           = esc_attr( $instance['content_from'] );
	        $content_number         = intval( $instance['content_number'] );
	        $column_number          = absint( $instance[ 'column_number' ] );
	        $bg_image           = esc_url( $instance[ 'bg_image' ] );
	        ?>
            <p>
                <label for="<?php echo $this->get_field_id( 'unique_id' ); ?>"><?php esc_html_e( 'Section ID', 'portfolio-web' ); ?></label>
                <input class="widefat" id="<?php echo $this->get_field_id( 'unique_id' ); ?>" name="<?php echo $this->get_field_name( 'unique_id' ); ?>" type="text" value="<?php echo $unique_id; ?>" />
                <br />
                <small><?php esc_html_e('Enter a Unique Section ID. You can use this ID in Menu item for enabling One Page Menu.','portfolio-web')?></small>
            </p>
            <p>
                <label for="<?php echo $this->get_field_id( 'title' ); ?>"><?php esc_html_e( 'Title', 'portfolio-web' ); ?></label>
                <input class="widefat" id="<?php echo $this->get_field_id( 'title' ); ?>" name="<?php echo $this->get_field_name( 'title' ); ?>" type="text" value="<?php echo $title; ?>" />
            </p>
            <!--updated code-->
            <label><?php esc_html_e( 'Select Pages', 'portfolio-web' ); ?></label>
            <br/>
            <small><?php esc_html_e( 'Add Page, Reorder and Remove. Please do not forget to add Featured Image and Excerpt on selected pages', 'portfolio-web' ); ?></small>
            <div class="at-repeater">
		        <?php
		        $total_repeater = 0;
		        if  ( is_array($at_all_page_items) && count($at_all_page_items) > 0 ){
			        foreach ($at_all_page_items as $testimonial){
				        $repeater_id  = $this->get_field_id( 'at_all_page_items') .$total_repeater.'page_id';
				        $repeater_name  = $this->get_field_name( 'at_all_page_items' ).'['.$total_repeater.']['.'page_id'.']';

				        $repeater_designation_id  = $this->get_field_id( 'at_all_page_items') .$total_repeater.'designation';
				        $repeater_designation_name  = $this->get_field_name( 'at_all_page_items' ).'['.$total_repeater.']['.'designation'.']';

				        ?>
                        <div class="repeater-table">
                            <div class="at-repeater-top">
                                <div class="at-repeater-title-action">
                                    <button type="button" class="at-repeater-action">
                                        <span class="at-toggle-indicator" aria-hidden="true"></span>
                                    </button>
                                </div>
                                <div class="at-repeater-title">
                                    <h3><?php esc_html_e( 'Select Item', 'portfolio-web' )?><span class="in-at-repeater-title"></span></h3>
                                </div>
                            </div>
                            <div class='at-repeater-inside hidden'>
						        <?php
						        /* see more here https://codex.wordpress.org/Function_Reference/wp_dropdown_pages*/
						        $args = array(
							        'selected'              => $testimonial['page_id'],
							        'name'                  => $repeater_name,
							        'id'                    => $repeater_id,
							        'class'                 => 'widefat at-select',
							        'show_option_none'      => esc_html__( 'Select Page', 'portfolio-web'),
							        'option_none_value'     => 0 // string
						        );
						        wp_dropdown_pages( $args );
						        ?>
                                <div class="at-repeater-control-actions">
		                            <?php
		                            if( get_edit_post_link( $testimonial['page_id'] ) ){
			                            ?>
                                        <a class="button button-link at-postid alignright" target="_blank" href="<?php echo esc_url( get_edit_post_link( $testimonial['page_id'] ) ); ?>">
				                            <?php esc_html_e('Full Edit','portfolio-web');?>
                                        </a>
			                            <?php
		                            }
		                            ?>
                                </div>
                                <p>
                                    <label><?php esc_html_e( 'Enter designation', 'portfolio-web' ); ?></label>
                                    <input type="text" class="widefat" name="<?php echo esc_attr( $repeater_designation_name ); ?>" id="<?php echo esc_attr( $repeater_designation_id ); ?>" value="<?php echo esc_attr( $testimonial['designation'] ); ?>" />
                                </p>
                                <div class="at-repeater-control-actions">
                                    <button type="button" class="button-link button-link-delete at-repeater-remove"><?php esc_html_e('Remove','portfolio-web');?></button> |
                                    <button type="button" class="button-link at-repeater-close"><?php esc_html_e('Close','portfolio-web');?></button>
	                                <?php
	                                if( get_edit_post_link( $testimonial['page_id'] ) ){
		                                ?>
                                        <a class="button button-link at-postid alignright" target="_blank" href="<?php echo esc_url( get_edit_post_link( $testimonial['page_id'] ) ); ?>">
			                                <?php esc_html_e('Full Edit','portfolio-web');?>
                                        </a>
		                                <?php
	                                }
	                                ?>
                                </div>
                            </div>
                        </div>
				        <?php
				        $total_repeater = $total_repeater + 1;
			        }
		        }
		        $coder_repeater_depth = 'coderRepeaterDepth_'.'0';
		        $repeater_id  = $this->get_field_id( 'at_all_page_items') .$coder_repeater_depth.'page_id';
		        $repeater_name  = $this->get_field_name( 'at_all_page_items' ).'['.$coder_repeater_depth.']['.'page_id'.']';

		        $repeater_designation_id  = $this->get_field_id( 'at_all_page_items') .$coder_repeater_depth.'designation';
		        $repeater_designation_name  = $this->get_field_name( 'at_all_page_items' ).'['.$coder_repeater_depth.']['.'designation'.']';
		        
		        ?>
                <script type="text/html" class="at-code-for-repeater">
                    <div class="repeater-table">
                        <div class="at-repeater-top">
                            <div class="at-repeater-title-action">
                                <button type="button" class="at-repeater-action">
                                    <span class="at-toggle-indicator" aria-hidden="true"></span>
                                </button>
                            </div>
                            <div class="at-repeater-title">
                                <h3><?php esc_html_e( 'Select Item', 'portfolio-web' )?><span class="in-at-repeater-title"></span></h3>
                            </div>
                        </div>
                        <div class='at-repeater-inside hidden'>
					        <?php
					        /* see more here https://codex.wordpress.org/Function_Reference/wp_dropdown_pages*/
					        $args = array(
						        'selected'              => '',
						        'name'                  => $repeater_name,
						        'id'                    => $repeater_id,
						        'class'                 => 'widefat at-select',
						        'show_option_none'      => esc_html__( 'Select Page', 'portfolio-web'),
						        'option_none_value'     => 0 // string
					        );
					        wp_dropdown_pages( $args );
					        ?>
                            <p>
                                <label><?php esc_html_e( 'Enter designation', 'portfolio-web' ); ?></label>
                                <input type="text" class="widefat" name="<?php echo esc_attr( $repeater_designation_name ); ?>" id="<?php echo esc_attr( $repeater_designation_id ); ?>" />
                            </p>
                            <div class="at-repeater-control-actions">
                                <button type="button" class="button-link button-link-delete at-repeater-remove"><?php esc_html_e('Remove','portfolio-web');?></button> |
                                <button type="button" class="button-link at-repeater-close"><?php esc_html_e('Close','portfolio-web');?></button>
                            </div>
                        </div>
                    </div>

                </script>
		        <?php
		        /*most imp for repeater*/
		        echo '<input class="at-total-repeater" type="hidden" value="'.$total_repeater.'">';
		        $add_field = esc_html__('Add Item', 'portfolio-web');
		        echo '<span class="button-primary at-add-repeater" id="'.$coder_repeater_depth.'">'.$add_field.'</span><br/>';
		        ?>
            </div>
            <p>
                <label for="<?php echo $this->get_field_id( 'content_from' ); ?>"><?php _e( 'Content From', 'portfolio-web' ); ?>:</label>
                <select class="widefat" id="<?php echo $this->get_field_id( 'content_from' ); ?>" name="<?php echo $this->get_field_name( 'content_from' ); ?>">
			        <?php
			        $portfolio_web_about_content_from = portfolio_web_content_from();
			        foreach ( $portfolio_web_about_content_from as $key => $value ) {
				        ?>
                        <option value="<?php echo esc_attr( $key ) ?>" <?php selected( $key, $content_from ); ?>><?php echo esc_attr( $value ); ?></option>
				        <?php
			        }
			        ?>
                </select>
            </p>
            <p>
                <label for="<?php echo $this->get_field_id( 'content_number' ); ?>"><?php _e( 'Number of words in content', 'portfolio-web' ); ?>:</label>
                <br/>
                <small>
			        <?php esc_html_e('Please enter -1 to show full content or 0 to show none','portfolio-web'); ?>
                </small>
                <input class="widefat" id="<?php echo $this->get_field_id( 'content_number' ); ?>" name="<?php echo $this->get_field_name( 'content_number' ); ?>" type="number" value="<?php echo $content_number; ?>" />
            </p>
            <p>
                <label for="<?php echo $this->get_field_id( 'column_number' ); ?>"><?php esc_html_e( 'Column Number', 'portfolio-web' ); ?></label>
                <select class="widefat" id="<?php echo $this->get_field_id( 'column_number' ); ?>" name="<?php echo $this->get_field_name( 'column_number' ); ?>" >
                    <?php
                    $portfolio_web_testimonial_column_numbers = portfolio_web_widget_column_number();
                    foreach ( $portfolio_web_testimonial_column_numbers as $key => $value ){
                        ?>
                        <option value="<?php echo esc_attr( $key )?>" <?php selected( $key, $column_number ); ?>><?php echo esc_attr( $value );?></option>
                        <?php
                    }
                    ?>
                </select>
            </p>
            <p>
                <label for="<?php echo $this->get_field_id('bg_image'); ?>">
			        <?php esc_html_e( 'Select Background Image', 'portfolio-web' ); ?>
                </label>
		        <?php
		        $portfolio_web_display_none = '';
		        if ( empty( $bg_image ) ){
			        $portfolio_web_display_none = ' style="display:none;" ';
		        }
		        ?>
                <span class="img-preview-wrap" <?php echo  $portfolio_web_display_none ; ?>>
                    <img class="widefat" src="<?php echo esc_url( $bg_image ); ?>" alt="<?php esc_attr_e( 'Image preview', 'portfolio-web' ); ?>"  />
                </span><!-- .img-preview-wrap -->
                <input type="text" class="widefat" name="<?php echo $this->get_field_name('bg_image'); ?>" id="<?php echo $this->get_field_id('bg_image'); ?>" value="<?php echo esc_url( $bg_image ); ?>" />
                <input type="button" value="<?php esc_attr_e( 'Upload Image', 'portfolio-web' ); ?>" class="button media-image-upload" data-title="<?php esc_attr_e( 'Select Background Image','portfolio-web'); ?>" data-button="<?php esc_attr_e( 'Select Background Image','portfolio-web'); ?>"/>
                <input type="button" value="<?php esc_attr_e( 'Remove Image', 'portfolio-web' ); ?>" class="button media-image-remove" />
            </p>
            <?php
        }

        /**
         * Function to Updating widget replacing old instances with new
         *
         * @access public
         * @since 1.0
         *
         * @param array $new_instance new arrays value
         * @param array $old_instance old arrays value
         * @return array
         *
         */
        public function update( $new_instance, $old_instance ) {
            $instance = $old_instance;
            $instance[ 'unique_id' ]    = sanitize_key( $new_instance[ 'unique_id' ] );
            $instance[ 'title' ]        = sanitize_text_field( $new_instance[ 'title' ] );
	        /*updated code*/
	        $page_ids = array();
	        if( isset($new_instance['at_all_page_items'] )){
		        $at_all_page_items    = $new_instance['at_all_page_items'];

		        if  ( is_array($at_all_page_items) && count($at_all_page_items) > 0 ){
			        foreach ( $at_all_page_items as $boxes => $box ){
				        foreach ( $box as $key => $value ){
					        $page_ids[$boxes][$key] = wp_kses_post( $value );
				        }
			        }
		        }
	        }
	        $instance['at_all_page_items']  = $page_ids;

	        $portfolio_web_about_content_from   = portfolio_web_content_from();
	        $instance['content_from']           = portfolio_web_sanitize_choice_options( $new_instance['content_from'], $portfolio_web_about_content_from, 'excerpt' );

	        $instance['content_number']     = intval( $new_instance['content_number'] );

	        $portfolio_web_widget_column_number    = portfolio_web_widget_column_number();
	        $instance[ 'column_number' ]            = portfolio_web_sanitize_choice_options( $new_instance[ 'column_number' ], $portfolio_web_widget_column_number, 4 );

	        $instance['bg_image']       = ( isset( $new_instance['bg_image'] ) ) ?  esc_url_raw( $new_instance['bg_image'] ): '';

	        return $instance;
        }

        /**
         * Function to Creating widget front-end. This is where the action happens
         *
         * @access public
         * @since 1.0
         *
         * @param array $args widget setting
         * @param array $instance saved values
         * @return void
         *
         */
        public function widget($args, $instance) {
            $instance               = wp_parse_args( (array) $instance, $this->defaults);

            /*default values*/
            $unique_id              = !empty( $instance[ 'unique_id' ] ) ? esc_attr( $instance[ 'unique_id' ] ) : esc_attr( $this->id );
            $title                  = apply_filters( 'widget_title', !empty( $instance['title'] ) ? $instance['title'] : '', $instance, $this->id_base );
	        $at_all_page_items      = $instance['at_all_page_items'];
	        $content_from           = esc_attr( $instance['content_from'] );
	        $content_number         = intval( $instance['content_number'] );
            $column_number          = absint( $instance[ 'column_number' ] );

	        $bg_image               = esc_url( $instance['bg_image'] );
	        $bg_image_style = '';
	        if ( !empty( $bg_image ) ) {
		        $bg_image_style .= 'background-image:url(' . $bg_image . ');background-repeat:no-repeat;background-size:cover;background-attachment:fixed;background-position: center;';
		        $bg_image_class = 'at-parallax';
	        }
	        else{
		        $bg_image_class = 'at-no-parallax';
	        }

	        $div_attr = 'class="row featured-entries-col featured-entries-logo "';

	        echo $args['before_widget'];

	        $animation = "init-animate zoomIn";
	        ?>
            <section id="<?php echo esc_attr( $unique_id );?>" class="at-widgets acme-testimonials <?php echo $bg_image_class;?>" style="<?php echo $bg_image_style; ?>">
                <div class="container">
	               <?php
                    if( ! empty( $title )){
	                    echo "<div class='at-widget-title-wrapper ".$animation."'>";
	                    if ( ! empty( $title ) ) {
                            echo $args['before_title'] . esc_html( $title ) . $args['after_title'];
                        }
                        echo "</div>";
                    }
	                ?>
                    <div <?php echo $div_attr;?>>
                        <?php
                        $post_in = array();
                        $menu_other_details = array();
                        if  ( is_array($at_all_page_items) && count($at_all_page_items) > 0 ){
	                        foreach ( $at_all_page_items as $testimonial ){
		                        if( isset( $testimonial['page_id'] ) && !empty( $testimonial['page_id'] ) ){
			                        $page_id = $testimonial['page_id'];

			                        $post_in[] = $page_id;
			                        $menu_other_details[$page_id]['designation'] = $testimonial['designation'];
		                        }
	                        }
                        }
                        if( !empty ( $post_in ) && is_array( $post_in )) :
	                        $portfolio_web_post_in_page_args = array(
		                        'post__in'         => $post_in,
		                        'orderby'             => 'post__in',
		                        'posts_per_page'      => count( $post_in ),
		                        'post_type'           => 'page',
		                        'no_found_rows'       => true,
		                        'post_status'         => 'publish'
	                        );
                            $testimonial_query = new WP_Query( $portfolio_web_post_in_page_args );
                            /*The Loop*/
                            if ( $testimonial_query->have_posts() ):
	                            $portfolio_web_featured_index = 1;
                                while( $testimonial_query->have_posts() ):$testimonial_query->the_post();
	                                $designation  = $menu_other_details[get_the_ID()]['designation'];
	                                $portfolio_web_list_classes = 'single-list ';

	                                if( 1 != $portfolio_web_featured_index && $portfolio_web_featured_index % $column_number == 1 ){
		                                echo "<div class='clearfix'></div>";
	                                }
	                                if ( 1 == $column_number ) {
		                                $portfolio_web_list_classes .= "col-sm-12";
	                                } elseif ( 2 == $column_number ) {
		                                $portfolio_web_list_classes .= "col-sm-6";
	                                } elseif ( 3 == $column_number ) {
		                                $portfolio_web_list_classes .= "col-sm-4 col-md-4";
	                                } else {
		                                $portfolio_web_list_classes .= "col-sm-3 col-md-3";
	                                }
	                                ?>
                                    <div class="<?php echo esc_attr( $portfolio_web_list_classes ); ?>">
                                        <div class="testimonial-item <?php echo esc_attr( $animation );?>">
                                            <div class="testimonial-content">
                                                <div class="testimonial-author">
                                                    <?php
                                                    if( has_post_thumbnail( ) ){
                                                        ?>
                                                        <div class="testimonial-image">
                                                            <?php the_post_thumbnail('thumbnail'); ?>
                                                        </div>
                                                        <?php
                                                    }
                                                    ?>
                                                    <h3 class="testimonial-author-name">
	                                                    <?php
	                                                    echo '<a href="'.esc_url(get_permalink()).'" class="all-link">';
	                                                    the_title();
	                                                    echo '</a>';

                                                        if( !empty( $designation )){
                                                            echo '<span class="designation">'.esc_html( $designation ).'</span>';
                                                        }
	                                                    ?>
                                                    </h3>
                                                </div>

	                                            <?php
	                                            if( 0 != $content_number ){
		                                            ?>
                                                    <div class="testimonial-details">
			                                            <?php
			                                            portfolio_web_advanced_content( $content_number, $content_from );
			                                            ?>
                                                    </div>
		                                            <?php
	                                            }
	                                            ?>
                                            </div>
                                        </div>
                                    </div>
                                    <?php
	                                $portfolio_web_featured_index++;
                                endwhile;
                            endif;
	                        wp_reset_postdata();
                        endif;
                        ?>
                    </div><!--row-->
                </div>
            </section>
            <?php
            echo $args['after_widget'];
        }
    } // Class Portfolio_Web_Testimonial ends here
}