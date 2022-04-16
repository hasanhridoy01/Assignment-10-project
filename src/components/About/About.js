import React from 'react';
import images from '../../img/275433968_927694141272839_84199088523687217_n.jpg';
import './About.css';

const About = () => {
  return (
    <div>
      <div className='container details'>
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-8">
            <div className="card border-0 p-2">
              <h1 className='mb-3'>Zahid Hasan <span>Hridoy</span></h1>
              <p style={{ fontSize: '17px', fontWeight: '600' }}>Hello! My Name is Zahid Hasan Hridoy, and I am student of Bangladesh University of Business and Technology or  <span className='scolors'>BUBT is a private university in Bangladesh, located in Mirpur, Dhaka, Bangladesh.</span> and i am study with <span style={{ fontSize: '20px' }}>Bsc,in Computer Science and Engineering</span>. My Dream I will Become a Full Stake Web Developer. i am working heard with fullfil my dream, How did your attributes contribute to those accomplishments? Be as specific as you can.

                Madison's hunger for knowledge and determination to turn information into action has contributed to her most recent success at Rockwell Group. There, she led international award-winning campaigns for heavy-hitting brands such as Puma, Gucci, and Rolex.

                Meanwhile, she vastly improved the productivity of her department by implementing strategic project management methods and ensuring a work-life balance for her team. Madison believes mindfulness in the workplace is key to success, a tenet she lives out through her interests in yoga, meditation, gardening, and painting. Once you’ve completed the exercises above, you’ll have some material to work into your ‘About Me’ page. Ideally, each answer should flow into the next. Again, you want the finished product to convey who you are and what you’re doing, how you got there, and where you’re looking to go next. If you’re writing the ‘About’ statement on a business website, it’s generally advised to use third person ("She supervises ...").
                If your website is a personal portfolio or blog, it’s best to use first person ("I have ten years of experience ...").You won’t be introducing yourself in the same way you would be to, say, someone you’ve just met in a bar, but you also shouldn’t sound like a politician running for president. Use a tone pitch you should use for networking. Also, be honest about your interests and goals.</p>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-4">
            <div className="card border-0">
              <img className='about-img' src={images} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;