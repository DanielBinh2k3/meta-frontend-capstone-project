import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './homescreen.css'
const HomeScreen = () => {
  const imageStyle = {
    hegiht: '24rem',
    width: '30%',
  }
  const imageStylee = {
    height: '16rem',
    width: '28rem',
  }
  return (
    <>
    <section class="hero">
      <div class="container grid">
        <main>
          <section className='margin'>
              <article id="hero">
                <h1> <b>20% Off This Weekend</b> </h1>
                <p>
                    Don't miss out! Little Lemon is having a super sale. Get 20% off your meal. Treat yourself to delicious [cuisine type] today
                </p>
              </article>
          </section>
          <section >
            <Row>
              <article style={imageStyle}>
                <h2>Daniel Menu</h2>
                <img src="https://th.bing.com/th/id/R.3c91ddb190bcd1d9a0fec6de488700e0?rik=o7zHbiEVILmS1A&pid=ImgRaw&r=0" alt="article2"/>
                <p>
                    A menu is a list of food and drinks offered at a restaurant, cafe, or any food establishment. It typically includes a description of each item, its ingredients, and its price. The menu helps customers make informed decisions about what they would like to order and can also reflect the restaurant's style, cuisine, and unique offerings.
                </p>
                <a href="menu" target="_blank" className='btn btn-success btn-block'>See our new menu</a>
              </article>
              <article style={imageStyle}>
                <h2>Book a table</h2>
                <img src="https://th.bing.com/th/id/R.896dfa969736e52f056b3a3e04b57004?rik=Wj1NvgInIWMHlQ&riu=http%3a%2f%2fwww.nicdarkthemes.com%2fthemes%2frestaurant%2fwp%2fdemo%2frestaurant%2fwp-content%2fuploads%2fsites%2f2%2f2019%2f02%2frestaurant-01.jpg&ehk=S5QPeZBsZzvaVFA%2ffQf39NQH4DLQjslUpNoGm89HF50%3d&risl=&pid=ImgRaw&r=0" alt="article3"/>
                <p>
                    With a diverse menu of beef steak, our chefs use only the freshest ingredients to craft dishes that will tantalize your taste buds. Whether you're in the mood for a quick bite or a sit-down meal, we have something for everyone. And with our welcoming atmosphere, you'll feel right at home while you enjoy your meal!
                </p>
                <a href="book" target="_blank" className='btn btn-success btn-block'>Book your table now</a>
              </article >
              <article style={imageStyle}>
                <h2>Opening Hours</h2>
                <img src="https://www.urbanartwork.net/wp-content/uploads/2017/08/opening-hours-sign-opening-times-sign-sticker-22-01.jpg" alt="article4"/>
                <p>
                    Welcome to Little Lemon, where we're open 7 days of the week from <b>Tuesday</b> to <b>Sunday</b>. We have what you're searching for, whether you want breakfast, lunch, or dinner. Our doors are open <b>10:00am</b>, and our kitchen is always cooking up something delicious. Come visit us today and see why we're the go-to spot for beef stea in town!
                </p>
                <a href="opening-hours" target="_blank" className='btn btn-success btn-block'>See our timeline in here</a> 
              </article>
              </Row>
          </section>
          <section id='story-of-us'>
            <article>
              <Row>
                <Col>
                <h1><div style={{color: '#F4CE14'}}>Daniel Restaurant</div> </h1>
                <h2>Viet Nam</h2>
                <p>Vietnamese cuisine is known for its bold flavors, fresh ingredients, and healthy cooking techniques. Vietnamese restaurants typically offer a wide variety of dishes that showcase the country's culinary traditions and regional specialties.

One of the most popular dishes in Vietnamese cuisine is phở (pronounced "fuh"), a hearty noodle soup typically made with beef or chicken broth, rice noodles, and various herbs and spices. Other popular dishes include bánh mì sandwiches, bún chả (grilled pork with noodle salad), and gỏi cuốn (fresh spring rolls).

Vietnamese restaurants often feature a casual and welcoming atmosphere, with simple but tasteful decor and friendly service. Many restaurants also offer a range of vegetarian and vegan options, making it a great choice for those with dietary restrictions.

In addition to the food, Vietnamese restaurants often offer a range of beverages, including traditional Vietnamese coffee, tea, and fresh juices. Many restaurants also serve beer and wine, as well as cocktails with a Vietnamese twist.

Overall, a visit to a Vietnamese restaurant can be a delightful experience, offering a chance to explore the vibrant flavors and culinary traditions of this fascinating country.


Share
Like
Dislike</p>
                </Col>
                <Col>
                  <img src="https://th.bing.com/th/id/R.f807610d7792f54105c2e44f13223a7e?rik=i7PquRbGUh4g8A&riu=http%3a%2f%2fwww.febrishotelspabali.com%2fwpsite%2fwp-content%2fuploads%2f2014%2f07%2fReception_1-1.4MB.jpg&ehk=M1qF7VIvU%2faOnIRuEjjDCb295SEgUA30Od6tMfXpHvU%3d&risl=&pid=ImgRaw&r=0" alt="article4" style={imageStylee}/>
                  <img src="https://th.bing.com/th/id/R.f807610d7792f54105c2e44f13223a7e?rik=i7PquRbGUh4g8A&riu=http%3a%2f%2fwww.febrishotelspabali.com%2fwpsite%2fwp-content%2fuploads%2f2014%2f07%2fReception_1-1.4MB.jpg&ehk=M1qF7VIvU%2faOnIRuEjjDCb295SEgUA30Od6tMfXpHvU%3d&risl=&pid=ImgRaw&r=0" alt="article4" style={imageStylee}/>
                </Col>

              </Row>
            </article>
          </section>
        </main>
      </div>
    </section>
    </>
  )
}

export default HomeScreen