import pageApi from 'api/pageApi'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useFormValidate from '../../core/hook/useValidateForm'


const styles = {
  inputError: {
    color: 'red',
    fontSize: 13,
    fontStyle: 'italic',
    marginTop: '20px',
    marginLeft: '20px'
  }
}

export default function ContactUs() {

  let { form, error, inputChange, submit } = useFormValidate({
    name: '',
    email: '',
    title: '',
    message: ''
  }, {
    rule: {
      name: {
        required: true
      },
      email: {
        required: true,
        pattern: 'email'
      },
      title: {
        required: true
      },
      message: {
        required: true,
        min: 30
      }
    },
    message: {
      name: {
        required: 'Your Name cannot be left blank'
      },
      email: {
        required: 'Your Email cannot be left blank'
      },
      title: {
        required: 'Title cannot be left blank'
      },
      message: {
        required: 'Message cannot be left blank'
      }
    }
  })

  let [errorMessage, setErrorMessage] = useState('')

  let [successMessage, setSuccessMessage] = useState('')

  function _btnSend() {
    let error = submit()

    if (Object.keys(error).length === 0) {
      pageApi.contact(form)
        .then(res => {
          if(res.success) {
            setSuccessMessage('Gửi liên hệ thành công. Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất!');
          }
        }, res => {
            setErrorMessage(res.error)
        })
    }
  }


  return (
    <section className="pt-7 pb-12">
      <div className="container">
        <div className="row">
          <div className="col-12">
            {/* Heading */}
            <h3 className="mb-10 text-center">Contact Us</h3>
          </div>
        </div>
        <div className="row justify-content-between">
          <div className="col-12 col-md-4 col-xl-3">
            <aside className="mb-9 mb-md-0">
              {/* Heading */}
              <h6 className="mb-6">
                <i className="fe fe-phone text-primary mr-4" /> Call to Us:
                </h6>
              {/* Text */}
              <p className="text-gray-500">
                We're available from 10 am - 10 pm EST,
                7 days a week.
                </p>
              <p>
                <strong>Customer Service:</strong><br />
                <a className="text-gray-500" href="tel:60146-389-574">6-146-389-574</a>
              </p>
              <p className="mb-0">
                <strong>Careers:</strong><br />
                <a className="text-gray-500" href="tel:60146-389-574">6-146-389-574</a>
              </p>
              {/* Divider */}
              <hr />
              {/* Heading */}
              <h6 className="mb-6">
                <i className="fe fe-mail text-primary mr-4" /> Write to Us:
                </h6>
              {/* Text */}
              <p className="text-gray-500">
                Fill out our form and we will contact you
                within 24 hours.
                </p>
              <p>
                <strong>Customer Service:</strong><br />
                <a className="text-gray-500" href="mailto:customer@example.com">customer@example.com</a>
              </p>
              <p className="mb-0">
                <strong>Careers:</strong><br />
                <a className="text-gray-500" href="mailto:careers@example.com">careers@example.com</a>
              </p>
              {/* Divider */}
              <hr />
              {/* Heading */}
              <h6 className="mb-6">
                <i className="fe fe-mail text-primary mr-4" /> Find Us:
                </h6>
              {/* Text */}
              <p className="mb-0 text-gray-500">
                Want to visit our Offline Stores?
                </p>
              {/* Button */}
              <p className="mb-0">
                <Link className="btn btn-link px-0 text-body" to="/store-locator">
                  Go to Store Locator <i className="fe fe-arrow-right ml-2" />
                </Link>
              </p>
            </aside>
          </div>
          <div className="col-12 col-md-8">
            {
              successMessage && <p className="success-message">{successMessage}</p>
            }
            {
              errorMessage && <p className="error-message">{errorMessage}</p>
            }
            {/* Form */}
            {/* Email */}
            <div className="form-group">
              <label className="sr-only" htmlFor="contactName">
                Your Name *
                  </label>
              <input className="form-control form-control-sm" id="contactName" type="text" placeholder="Your Name *" name="name" value={form.name} onChange={inputChange} />
              {
                error.name && <p className="error-text" style={styles.inputError}>{error.name}</p>
              }
            </div>
            {/* Email */}
            <div className="form-group">
              <label className="sr-only" htmlFor="contactEmail">
                Your Email *
                  </label>
              <input className="form-control form-control-sm" id="contactEmail" type="email" placeholder="Your Email *" name="email" value={form.email} onChange={inputChange} />
              {
                error.email && <p className="error-text" style={styles.inputError}>{error.email}</p>
              }
            </div>
            {/* Email */}
            <div className="form-group">
              <label className="sr-only" htmlFor="contactTitle">
                Title *
                  </label>
              <input className="form-control form-control-sm" id="contactTitle" type="text" placeholder="Title *" name="title" value={form.title} onChange={inputChange} />
              {
                error.title && <p className="error-text" style={styles.inputError}>{error.title}</p>
              }
            </div>
            {/* Email */}
            <div className="form-group mb-7">
              <label className="sr-only" htmlFor="contactMessage">
                Message *
                  </label>
              <textarea className="form-control form-control-sm" id="contactMessage" rows={5} placeholder="Message *" name="message" value={form.message} onChange={inputChange} />
              {
                error.message && <p className="error-text" style={styles.inputError}>{error.message}</p>
              }
              <p style={{textAlign: 'right'}}>
                {
                  form.message.length
                }/30
              </p>
            </div>
            {/* Button */}
            <button className="btn btn-dark" onClick={_btnSend}>
              Send Message
                </button>
          </div>
        </div>
      </div>
    </section>
  )
}
