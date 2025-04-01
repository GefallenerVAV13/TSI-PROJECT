import React, { Component } from 'react'
import { Button } from '../components/Button'
import { Text } from '../components/Text'
import { Input } from '../components/Input'

export default class Home extends Component {
    render() {
        return (
            <div>
            <Text color="primary" size="large">
                Привет, Андрей
            </Text>
            
            <Input
                type="text"
                placeholder="Enter your name"
                color="primary"
                size="medium"
            />

            <Button color = "secondary" size = "medium" title ="Подтвердить"
            ></Button>
        </div>

        )
    }
}