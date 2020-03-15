import React from 'react'
import {Text,View} from 'react-native'
import  {Card} from 'react-native-elements'

function RenderDish(props) {

    const dish = props.dishes;
    if(dish != null){
        return(
        <Card
          featuredTitle={dish.name}
          image={require('../shared/images/uthappizza.png')}
          >
            <Text style={{margin:10}}>
                {dish.description}
            </Text>
        </Card>
        )
    }
    else{
        return(<View></View>)
    }

}

function DishDetail(props) {
    return(

        <RenderDish dishes={props.dish}/>
    )

}

export default DishDetail;