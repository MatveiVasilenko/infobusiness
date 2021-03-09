import React from 'react'
import classes from './../news.module.scss'
import Image from './../../../components/ui/Image/Image';
import Title from '../../../components/ui/Title';
import Text from './../../../components/ui/Text/Text';
import {TextCenter} from './../../../components/ui/Text/index'

const NewItem = ({data}) => {
    return (
        <div className={classes.news}>
            <Image sizeWidth="40%">
                <img src={data.img} />
            </Image>
            <div className={classes.news__body}>
                <Title>{data.title}</Title>
                <Text>{data.subtitle}</Text>
            </div>
        </div>
    )
}
export default NewItem