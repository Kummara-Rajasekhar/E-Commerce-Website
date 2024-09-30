import React, { useState } from 'react'
import blogList from "../utilis/blogdata"
import { useParams } from 'react-router-dom';
import PageHeader from "../components/PageHeader"
import Tags from "../shop/Tags"
import PopularPost from "../shop/PopularPost"
const socialList = [{ iconName: 'icofont-facebook', siteLink: '#', className: 'facebook', }, { iconName: 'icofont-twitter', siteLink: '#', className: 'twitter', }, { iconName: 'icofont-linkedin', siteLink: '#', className: 'linkedin', }, { iconName: 'icofont-instagram', siteLink: '#', className: 'instagram', }, { iconName: 'icofont-pinterest', siteLink: '#', className: 'pinterest', },]

const SingleBlog = () => {
  const [blog, setblog] = useState(blogList);
  const { id } = useParams();
  const result = blog.filter((p) => p.id == Number(id));
  return (
    <div>
      <PageHeader title={"Single BLog Page"} curPage={"Blog / Blog Details"} />
      <div className="blog-section blog-single padding-tb section-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <article>
                <div className="section-wrapper">
                  <div className="row row-cols-1 justify-content-center g-4">
                    <div className="col">
                      <div className="post-item style-2">
                        <div className="post-inner">
                          {
                            result.map((item) => (
                              <div key={item.id}>
                                <div className="post-thumb">
                                  <img src={item.imgUrl} alt="" className='w-100' />
                                </div>
                                <div className="post-content">
                                  <h3>{item.title}</h3>
                                  <div className="meta-post">
                                    <ul className="lab-ul">
                                      {
                                        item.metaList.map((val, i) => (
                                          <li key={i}><i className={val.iconName}></i>{val.text}</li>

                                        ))
                                      }
                                    </ul>

                                  </div>
                                  <p>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur officia voluptate placeat! Placeat cumque facilis earum dolore, commodi magnam maxime, aliquid enim ullam eius provident rerum et perspiciatis modi facere!
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur officia voluptate placeat! Placeat cumque facilis earum dolore, commodi magnam maxime, aliquid enim ullam eius provident rerum et perspiciatis modi facere!
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur officia voluptate placeat! Placeat cumque facilis earum dolore, commodi magnam maxime, aliquid enim ullam eius provident rerum et perspiciatis modi facere!
                                  </p>
                                  <blockquote>
                                    <p>
                                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem debitis earum provident error quis laboriosam pariatur, vero sapiente quidem dicta laborum magnam! Dolorem unde ut voluptates quaerat incidunt iure ipsum?                                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur officia voluptate placeat! Placeat cumque facilis earum dolore, commodi magnam maxime, aliquid enim ullam eius provident rerum et perspiciatis modi facere!
                                    </p>
                                    <cite>
                                      <a href="#">..Mellisa Hunter</a>
                                    </cite>
                                  </blockquote>
                                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus temporibus magnam ad mollitia. At obcaecati dolorem temporibus sapiente, amet tempora consequatur voluptatem quam odit, aliquam asperiores ratione doloremque soluta exercitationem?</p>
                                  <img src="/src/assets/images/blog/single/01.jpg" alt="" />
                                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus temporibus magnam ad mollitia. At obcaecati dolorem temporibus sapiente, amet tempora consequatur voluptatem quam odit, aliquam asperiores ratione doloremque soluta exercitationem?</p>
                                  <div className="video-thumb">
                                    <img src="/src/assets/images/blog/single/02.jpg" alt="" />
                                    <a href="https://youtu.be/PGuKjkdGrEI?si=HLgH-dSKG5SnK6uJ" target='_blank' className='video-button popup'>
                                      <i className='icofont-ui-play'></i></a>
                                  </div>
                                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus temporibus magnam ad mollitia. At obcaecati dolorem temporibus sapiente, amet tempora consequatur voluptatem quam odit, aliquam asperiores ratione doloremque soluta exercitationem?</p>
                                  <div className="tags-section">
                                    <ul className="tags lab-ul">
                                      <li>
                                        <a href="#">Agency</a>
                                      </li>
                                      <li>
                                        <a href="#">Business</a>
                                      </li>
                                      <li>
                                        <a href="#">Personal</a>
                                      </li>
                                    </ul>
                                    <ul className="lab-ul social-icons">
                                      {
                                        socialList.map((val, i) => (
                                          <li key={i}>
                                            <a href="#" className={val.className}>
                                              <i className={val.iconName}></i>
                                            </a>
                                          </li>
                                        ))
                                      }
                                    </ul>
                                  </div>
                                </div>


                              </div>
                            ))
                          }
                        </div>
                      </div>
                    </div>
                    <div className="navigations-part">
                      <div className="left">
                        <a href="#" className='prev'>
                          <i className="icofont-double-left">

                          </i>
                          Previous BLog
                        </a>
                        <a href="#" className='title'>
                          Evisculate Parallel Processes via Techmica Sound MOdels Authoritative
                        </a>
                      </div>
                      <div className="right">
                        <a href="#" className='prev'>
                          Next BLog
                          <i className="icofont-double-right">

                          </i>
                        </a>
                        <a href="#" className='title'>
                          Evisculate Parallel Processes via Techmica Sound MOdels Authoritative
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-lg-4 col-12">
              <aside>
                <Tags />
                <PopularPost />
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleBlog