import React from "react";
import { StyleSheet, Button, TextInput, View, Text } from "react-native";
import {globalStyles} from '../styles/global';
import { Formik } from "formik";
import * as yup from 'yup';

const reviewSchema = yup.object({
  title: yup.string()
    .required('Please enter a title')
    .min(4, 'The title should be at least 4 characters long'),
  
  body: yup.string()
    .required('Please write something in the review')
    .min(8, 'Your review should be at least 8 characters long'),
  
  rating: yup.string()
    .required('Please give a rating between 1 and 5')
    .test('isNum', 'Rating should be a number between 1 and 5', (val) => {
      const parsed = parseInt(val);
      return !isNaN(parsed) && parsed >= 1 && parsed <= 5;
    })
});

export default function ReviewForm( {addReview}) {

    return(
        <View style={globalStyles.container}>
            <Formik 
            initialValues={{title:'', body:'',rating:''}}
            validationSchema={reviewSchema}
            onSubmit={(values,actions)=>{
                // actions.resetForm(); //resets form
                addReview(values);
            }}
            >
                {
                    (props) =>(
                        <View style={globalStyles.inputContainer}>
                            <TextInput
                              style={globalStyles.input}
                              placeholder="Review Title"
                              onChangeText={props.handleChange('title')}
                              value ={props.values.title}
                              onBlur={props.handleBlur('title')}
                              
                            />
                            <Text style={globalStyles.errorText}>{props.touched.title && props.errors.title}</Text>

                             <TextInput
                             multiline
                              style={globalStyles.input}
                              placeholder="Review Body"
                              onChangeText={props.handleChange('body')}
                               value ={props.values.body}
                              onBlur={props.handleBlur('body')}
                             
                            />
                            <Text style={globalStyles.errorText}>{props.touched.body && props.errors.body}</Text>

                             <TextInput
                              style={globalStyles.input}
                              placeholder="Review rating (1-5)"
                              onChangeText={props.handleChange('rating')}
                              value ={props.values.rating}
                              keyboardType="numeric"
                              onBlur={props.handleBlur('rating')}
                            />
                            <Text style={globalStyles.errorText}>{props.touched.rating && props.errors.rating}</Text>

                            <Button title="Submit" color="teal" onPress={props.handleSubmit} />
                        </View>
                    )
                }
            </Formik>

        </View>
    )
}