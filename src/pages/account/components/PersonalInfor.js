import InputGroup from 'components/InputGroup'
import useFormValidate from 'core/hook/useValidateForm'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateInfo } from 'redux/reducers/authReducer';

export default function PersonalInfor() {

  const auth = useSelector(state => state.auth)

  let dispatch = useDispatch()

  let { form, error, inputChange, submit } = useFormValidate({
    first_name: auth.user.first_name,
    last_name: auth.user.last_name,
    new_password: '',
    confirm_password: ''
  }, {
    rule: {
      first_name: {
        required: true
      },
      last_name: {
        required: true
      },
      new_password: {
        min: 6,
        max: 32
      },
      confirm_password: {
        match: 'new_password'
      }
    },
    message: {
      first_name: {
        required: 'Vui lòng nhập Tên của bạn'
      },
      last_name: {
        required: 'Vui lòng nhập Họ của bạn'
      },
      confirm_password: {
        match: 'Xác nhận mật khẩu không khớp'
      }
    }
  })

  function _btnSaveChanges() {
    let options = {
      exclude: {}
    }
    if (!form.new_password) {
      options.exclude = {
        new_password: '1'
      }
    }
    let error = submit(options);
    if (Object.keys(error).length === 0) {
      dispatch(updateInfo(form))
    }
  }

  return (
    <div className="col-12 col-md-9 col-lg-8 offset-lg-1">
      {/* Form */}
      <div className="row">
        <div className="col-12 col-md-6">
          {/* First Name */}
          <InputGroup name="first_name" title="First Name *" form={form} inputChange={inputChange} error={error} />
        </div>
        <div className="col-12 col-md-6">
          {/* Last Name */}
          <InputGroup name="last_name" title="Last Name *" form={form} inputChange={inputChange} error={error} />
        </div>
        <div className="col-12">
          {/* Email */}
          <div className="form-group">
            <label htmlFor="">Email *</label>
            <input className="form-control form-control-sm" type="text" disabled value={auth.user.username} />
          </div>
        </div>
        <div className="col-12 col-md-6">
          {/* Password */}
          <InputGroup name="new_password" type="password" title="New Password" form={form} inputChange={inputChange} error={error} />
        </div>
        <div className="col-12 col-md-6">
          {/* Password */}
          <InputGroup name="confirm_password" type="password" title="Confirm New Password" form={form} inputChange={inputChange} error={error} />
        </div>
        <div className="col-12 col-lg-6">
          {/* Birthday */}
          <div className="form-group">
            {/* Label */}
            <label>Date of Birth</label>
            {/* Inputs */}
            <div className="form-row">
              <div className="col-auto">
                {/* Date */}
                <label className="sr-only" htmlFor="accountDate">
                  Date
                  </label>
                <select className="custom-select custom-select-sm" id="accountDate">
                  {
                    [...Array(31)].map((e, i) => <option value={i + 1} key={i}>{i + 1}</option>)
                  }
                </select>
              </div>
              <div className="col">
                {/* Date */}
                <label className="sr-only" htmlFor="accountMonth">
                  Month
                  </label>
                <select className="custom-select custom-select-sm" id="accountMonth">
                  <option>January</option>
                  <option>February</option>
                  <option>March</option>
                  <option>April</option>
                  <option>May</option>
                  <option>June</option>
                  <option>July</option>
                  <option>August</option>
                  <option>September</option>
                  <option>October</option>
                  <option>November</option>
                  <option selected>December</option>
                </select>
              </div>
              <div className="col-auto">
                {/* Date */}
                <label className="sr-only" htmlFor="accountYear">
                  Year
                  </label>
                <select className="custom-select custom-select-sm" id="accountYear">
                  {
                    [...Array(50)].map((e, i) => <option value={i + 1} key={i}>{i + 1}</option>)
                  }
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          {/* Gender */}
          <div className="form-group mb-8">
            <label>Gender</label>
            <div className="btn-group-toggle" data-toggle="buttons">
              <label className="btn btn-sm btn-outline-border active">
                <input type="radio" name="gender" defaultChecked /> Male
                </label>
              <label className="btn btn-sm btn-outline-border">
                <input type="radio" name="gender" /> Female
                </label>
            </div>
          </div>
        </div>
        <div className="col-12">
          {/* Button */}
          <button className="btn btn-dark" type="submit" onClick={_btnSaveChanges}>Save Changes</button>
        </div>
      </div>
    </div>
  )
}
