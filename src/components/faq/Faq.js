import React from 'react';
import './faq.css'

const Faq = () => {
  return (
    <div className='faq'>
      <div className='row'>
        <div className='col-6'>
            <h2 className='headingFaq'>FAQ</h2>
            <p className='para'>Amet minim mollit non deserunt ullamco est sit
aliqua dolor do amet sint. </p>
        </div>
        <div className='col-6'>
        <div className="accordion accordion-flush" id="accordionFlushExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={{color:"#ffffff"}} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
      Do I need a personal injury report?
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Amet minim mollit non deserunt ullamco est sit
aliqua dolor do amet sint. Velit officia consequatduis
enim velit mollit Exer. Amet minim mollit non deserunt
ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={{color:"#ffffff"}} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
      How much is my case worth?
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Amet minim mollit non deserunt ullamco est sit
aliqua dolor do amet sint. Velit officia consequatduis
enim velit mollit Exer. Amet minim mollit non deserunt
ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={{color:"#ffffff"}} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
      What should I do right after car accidect
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Amet minim mollit non deserunt ullamco est sit
aliqua dolor do amet sint. Velit officia consequatduis
enim velit mollit Exer. Amet minim mollit non deserunt
ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={{color:"#ffffff"}} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
      How much is my case worth?
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Amet minim mollit non deserunt ullamco est sit
aliqua dolor do amet sint. Velit officia consequatduis
enim velit mollit Exer. Amet minim mollit non deserunt
ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.</div>
    </div>
  </div>
</div>
        </div>
      </div>

      <div className='subscribe'>
        <h2>Subscribe Our Newsletter</h2>
        <div className='emailSub'>
            <input type='text' placeholder='Name' className='subsInput'/>
            <input type='text' placeholder='Enter your email' className='subsInput2'/>
            <button className='subsBtn'>Send</button>
        </div>
      </div>
    </div>
  )
}

export default Faq
