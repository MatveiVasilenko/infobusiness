import React from 'react' 
import ContextData from './../../context/Data/ContextData';

const General = () => {
    const {stateData} = React.useContext(ContextData)
    
    return (
    <div>Для того чтобы появился новый видос - прошу Вас поставить мне {stateData.likes}</div>
    )
}
export default General