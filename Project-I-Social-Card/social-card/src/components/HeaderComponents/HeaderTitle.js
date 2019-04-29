import React from 'react';
import './Header.css';

import '.Header.css';

function HeaderTitle (){
    return (
        <div class Name='HeaderTitle'>
        <div className='name'>Lambda School</div>
        <div className='handle'>@LambdaSchool</div>
        <div className='date'>&#183; {moment ().format('Do MMM')}</div>
        </div>
    )
}

export default HeaderTitle