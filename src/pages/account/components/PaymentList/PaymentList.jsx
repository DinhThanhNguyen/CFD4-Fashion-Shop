import userApi from 'api/userApi'
import React, { useEffect, useState } from 'react'
import { useRouteMatch } from 'react-router'
import { Link } from 'react-router-dom'
import PaymentListItem from './PaymentListItem'

export default function PaymentList() {

  let [list, setList] = useState([])

  useEffect(async () => {
    let result = await userApi.getPayment()
    setList(result.data)
  }, [])

  let match = useRouteMatch()

  function setPaymentDefault(e) {
    if (!e.default) {
      userApi.changePaymentDefault({
        _id: e._id
      })

      list.forEach(e1 => {
        if (e1._id === e._id) {
          e1.default = true;
        } else {
          e1.default = false;
        }
      })

      setList([...list])
    }
  }

  return (
    <div className="col-12 col-md-9 col-lg-8 offset-lg-1">
      <div className="row">
        {
          list.map(e => <PaymentListItem key={e._id} {...e} setPaymentDefault={setPaymentDefault.bind(null, e)} />)
        }
        <div className="col-12">
          {/* Button */}
          <Link className="btn btn-block btn-lg btn-outline-border" to={`${match.path}/create`}>
            Add Payment Method <i className="fe fe-plus" />
          </Link>
        </div>
      </div>
    </div>
  )
}


