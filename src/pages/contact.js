import React from 'react'

function Contact() {
   return (
      <main>
         <div className="container-fluid">
            <h1 className="text-center my-5">Contact Us</h1>

            <div className="row justify-content-center">
               <div className="col-lg-8">
                  <form>
                     <div className="mb-3">
                        <label for="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name"/>
                     </div>
                     <div className="mb-3">
                        <label for="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp"/>
                           <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                     </div>
                     <div className="mb-3">
                        <label for="subject" className="form-label">Subject</label>
                        <input type="text" className="form-control" id="subject"/>
                     </div>
                     <div className="mb-3">
                        <label for="message" className="form-label">Message</label>
                        <textarea className="form-control" id="message" rows="5"></textarea>
                     </div>
                     <button type="submit" className="btn btn-primary mb-3">Submit</button>
                  </form>
               </div>
            </div>
         </div>
      </main>

   )
}

export default Contact