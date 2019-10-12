import React from 'react'
import { isNullOrUndefined } from 'util';

const Alert = ({ alert }) => {
    if(!isNullOrUndefined(alert)) {
        return <div className={`alert alert-${alert.type}`}>
                <i className="fa fa-info-circle"></i> {alert.msg}
            </div>
        }
    return null
}

export default Alert
