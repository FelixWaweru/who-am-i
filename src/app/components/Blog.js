import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const getBlogs = async () => {
    // Fetch data from local API route
    const response = await fetch("http://localhost:3000/api/blogs");
    const data = await response.json();
    
    return data;
};

const Blog = async () => {

    const blogData = await getBlogs();

    return (
        <div className="blogs-container" id="blog">
        <h2>Blog</h2>
        <div className="blogs-grid">
            {blogData && blogData.map((blog) => (
            <div className="blog-card" key={blog.id}>
                <Link href={blog.blogLink} target="_blank">
                    <div className="blog-header">
                        <FontAwesomeIcon
                            icon={faBook}
                            fontSize={35}
                            color="#0070F3"
                        />
                    </div>
                    <h3>{blog.title}</h3>
                    <p>{blog.description}</p>
                </Link>
            </div>
            
            ))
            }
        </div>
        </div>
    )
}

export default Blog;