<?php
if ( class_exists( 'WP_Customize_Control' ) && ! class_exists( 'Portfolio_Web_Customize_Category_Dropdown_Control' )):

    /**
     * Custom Control for category dropdown
     * @package Acme Themes
     * @subpackage Portfolio Web
     * @since 1.0.0
     *
     */
    class Portfolio_Web_Customize_Category_Dropdown_Control extends WP_Customize_Control {

        /**
         * Declare the control type.
         *
         * @access public
         * @var string
         */
        public $type = 'category_dropdown';

        /**
         * Function to  render the content on the theme customizer page
         *
         * @access public
         * @since 1.0.0
         *
         * @param null
         * @return void
         *
         */
        public function render_content() {
            $portfolio_web_customizer_name = 'portfolio_web_customizer_dropdown_categories_' . $this->id;;
            $portfolio_web_dropdown_categories = wp_dropdown_categories(
                array(
                    'name'              => $portfolio_web_customizer_name,
                    'echo'              => 0,
                    'show_option_none'  => esc_html__('Select','portfolio-web'),
                    'option_none_value' => 0,
                    'selected'          => $this->value(),
                )
            );
            $portfolio_web_dropdown_final = str_replace( '<select', '<select ' . $this->get_link(), $portfolio_web_dropdown_categories );
            printf(
                '<label><span class="customize-control-title">%s</span> %s</label>',
                $this->label,
                $portfolio_web_dropdown_final
            );
        }
    }
endif;

if ( class_exists( 'WP_Customize_Control' ) && ! class_exists( 'Portfolio_Web_Customize_Message_Control' )):
	/**
	 * Custom Control for html display
	 * @package Acme Themes
	 * @subpackage Portfolio Web
	 * @since 1.0.0
	 *
	 */
	class Portfolio_Web_Customize_Message_Control extends WP_Customize_Control {

		/**
		 * Declare the control type.
		 * @access public
		 * @var string
		 */
		public $type = 'message';

		/**
		 * Function to  render the content on the theme customizer page
		 *
		 * @access public
		 * @since 1.0.0
		 *
		 * @param null
		 * @return void
		 *
		 */
		public function render_content() {
			if ( empty( $this->description ) ) {
				return;
			}
			$allowed_html = array(
				'a' => array(
					'href' => array(),
					'title' => array(),
					'data-section' => array(),
					'class' => array(),
					'target' => array(),
				),
				'div' => array(
					'class' => array(),
				),
				'hr' => array(),
				'h2' => array(),
				'br' => array(),
				'em' => array(),
				'strong' => array(),
				'style' => array()
			);
			?>
            <div class="customize-message">
				<?php
				echo wp_kses( $this->description , $allowed_html )
				?>
            </div> <!-- .customize-message -->
			<?php
		}
	}
endif;