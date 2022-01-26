import React from 'react';
import { Text, View } from 'react-native';
import { DataTable } from 'react-native-paper';
import { Rating } from 'react-native-ratings';

const AboutDriver = () => {
  return (
    <View>
        <DataTable style={{backgroundColor: 'white', height: '100%'}}>
            <DataTable.Row>
                <DataTable.Cell></DataTable.Cell>
                <DataTable.Cell></DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
                <DataTable.Cell><Text>Name</Text></DataTable.Cell>
                <DataTable.Cell><Text style={{fontWeight: 'bold'}}>Max</Text></DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
                <DataTable.Cell><Text>Surname</Text></DataTable.Cell>
                <DataTable.Cell><Text style={{fontWeight: 'bold'}}>Verstapen</Text></DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
                <DataTable.Cell><Text>Age</Text></DataTable.Cell>
                <DataTable.Cell><Text style={{fontWeight: 'bold'}}>24</Text></DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
                <DataTable.Cell><Text>Experience</Text></DataTable.Cell>
                <DataTable.Cell><Text style={{fontWeight: 'bold'}}>2 years</Text></DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
                <DataTable.Cell><Text>Car</Text></DataTable.Cell>
                <DataTable.Cell><Text style={{fontWeight: 'bold'}}>Honda Civic 2020</Text></DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
                <DataTable.Cell><Text>Rating</Text></DataTable.Cell>
                <DataTable.Cell><Rating imageSize={14} readonly={true} startingValue={5} tintColor='white' style={{marginTop: 5}}/></DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
                <DataTable.Cell><Text>Languages</Text></DataTable.Cell>
                <DataTable.Cell><Text style={{fontWeight: 'bold'}}>Bosnian, English, Arabic</Text></DataTable.Cell>
            </DataTable.Row>
        </DataTable>
    </View>
  );
};

export default AboutDriver;
