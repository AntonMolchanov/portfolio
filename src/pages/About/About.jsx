import React from 'react';
import me from '../../components/img/me.png'
import style from './about.module.css'

function About(props) {
    return (
        <div>
            <div className={style.aboutContent}>
                <img className={style.avatar} src={me} alt="Anton Molchanov"/>
                <div className={style.textBlock}>
                    <h3 className={style.heading}>About me</h3>
                    <p className={style.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure laborum officiis optio possimus quae. Adipisci beatae ea earum error iure nostrum quas quisquam? Aliquid amet aut enim est excepturi fugit iure laborum, magnam nisi officia officiis perferendis quae quaerat, tempora ullam veritatis, voluptates. Aliquam aspernatur at doloremque, doloribus ea eum ex fugiat inventore quidem quos vel vero! Accusantium cumque deleniti dignissimos est illo itaque molestiae nulla quidem rerum, sequi soluta vel voluptate voluptatum. A alias amet aperiam atque eaque, excepturi facere hic impedit ipsum iste obcaecati placeat porro qui reiciendis sed similique tenetur vitae! Ab animi asperiores dicta doloremque error, ipsa molestiae nesciunt officiis perspiciatis quas, reiciendis veniam? Accusantium adipisci amet asperiores commodi consectetur, error iure minima molestiae necessitatibus nobis odio officia possimus praesentium provident quia ratione sint voluptas! Cupiditate eos, exercitationem hic impedit inventore ipsam, laboriosam minus nesciunt quod reprehenderit totam vel voluptate voluptatum. A ab neque quas quasi.</p>
                </div>
            </div>
        </div>
    );
}

export default About;