import React from 'react';
import {Sparklines, SparklinesLine} from 'react-sparklines';

export default (props) => {
    return(
        <div>
            {/*does not need to talk to redux*/}
            {/*gets its data from its parent.*/}
            <Sparklines height={120} width={180} data={props.data}>
                <SparklinesLine color={props.color}/>
            </Sparklines>
        </div>
    )
};