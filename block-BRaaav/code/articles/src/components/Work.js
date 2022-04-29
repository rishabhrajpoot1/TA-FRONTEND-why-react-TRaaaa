import work1 from "../images/work-image1.jpg"
import work2 from "../images/work-image2.jpg"
import work3 from "../images/work-image3.jpg"
import work4 from "../images/work-image4.jpg"
function Work() {
    return (
      <section className='work padding'>
        <div className='container'>
          <header className='sec-header text-center'>
            <h2 className='heading'>Our Work</h2>
            <div className='dot-wrapper'>
              <div className='dot'></div>
              <div className='dot'></div>
              <div className='dot'></div>
            </div>
          </header>
          <div className='flex'>
            <div className='flex-23'>
              <img
                className='flexible-img'
                src={work1}
                alt='Work 1'
              />
            </div>
            <div className='flex-23'>
              <img
                className='flexible-img'
                src={work2}
                alt='Work 1'
              />
            </div>
            <div className='flex-23'>
              <img
                className='flexible-img'
                src={work3}
                alt='Work 1'
              />
            </div>
            <div className='flex-23'>
              <img
                className='flexible-img'
                src={work4}
                alt='Work 1'
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default Work;