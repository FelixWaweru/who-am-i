import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const getBlogs = async () => {
    // Fetch data from local API route
    const response = await fetch(`${process.env.LOCAL_API_URL}api/blogs`);
    const data = await response.json();
    
    return data;
};

const Blog = async () => {

    // const blogData = await getBlogs();
    const blogData = [
        {
            id: 1,
            title: 'Automating online dating with Artificial Intelligence',
            description:
            '',
            blogLink: 'https://medium.datadriveninvestor.com/automating-dating-with-artificial-intelligence-989402bb5f63',
        },
        {
            id: 2,
            title: 'Celebrating Black History Month With a Swahili Programming Language',
            description:
            '',
            blogLink: 'https://whyweru.medium.com/celebrating-black-history-month-with-a-swahili-programming-language-6e30d9fbebda',
        }
    ];

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