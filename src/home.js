import React from 'react';

function Home() {
  return (
    <div>
      <h1 className='text-center display-4'>Welcome to College Guide</h1>

      <p className='text-center text-muted'>
        This site was built by <a href='https://www.samventocilla.com'>Sam Ventocilla</a>{' '}
        to help GVSU students find their next apartment
      </p>
      <br></br>

      <h2 className='text-center'>Tech Stack</h2>

      <div className='row justify-content-around'>
        <div className='card m-3 p-0 col-md-5'>
          <h4 className='card-header bg-secondary text-white mb-1'>Hosting</h4>
          <div className='card-body'>
            <h5 className='card-title'>Firebase Hosting</h5>
            <p className='card-text'>
              Firebase hosting was used because it is easy to setup and it's free. I also
              wanted to build the site using as many Google services as possible. It was
              great to use, though I did miss Netlify's integration with Github
            </p>
          </div>
        </div>
        <div className='card m-3 p-0 col-md-5'>
          <h4 className='card-header bg-secondary text-white mb-1'>Database</h4>
          <div className='card-body'>
            <h5 className='card-title'>Cloud Firestore</h5>
            <p className='card-text'>
              Google Cloud Firestore was used for the back end database because I had
              previously used Amazon Web Service's Simple Secure Storage and felt that
              there had to be a better option. I love it. My favorite part being able to
              see and edit the object data on their web interface.
            </p>
          </div>
        </div>
        <div className='card m-3 p-0 col-md-5'>
          <h4 className='card-header bg-secondary text-white mb-1'>Javascript Library</h4>
          <div className='card-body'>
            <h5 className='card-title'>React</h5>
            <p className='card-text'>
              I chose to use React as my Javascript library because it is used by many
              companies and I wanted to make sure that I understood it. Additionally, it
              helped me to learn the difference between single page and multi-page web
              apps.
            </p>
          </div>
        </div>
        <div className='card m-3 p-0 col-md-5'>
          <h4 className='card-header bg-secondary text-white mb-1'>Styling</h4>
          <div className='card-body'>
            <h5 className='card-title'>Bootstrap</h5>
            <p className='card-text'>
              Bootstrap was used for the styling because I wanted to become more familiar
              with it. I really like their card layout (Is that recursive since I'm
              writing this inside a card? Anyways..) Their documentation is also super
              easy to read.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
