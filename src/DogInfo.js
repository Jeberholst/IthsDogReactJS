import { Box, Button, Collapse, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import React, { Component } from 'react';
import { dogDataRows, fetchAllData, createData, clearDogData, convertToProperCase } from './DataFetcher';
import ButtonDisplayDogData from './ButtonDisplayDogData';

const cardStyle = {
  width: 400,
  height: "100%",
  padding: 5,
  paddingTop: 15,
  marginBottom: 5,
};


class DogInfo extends Component {
  render(){
    return (
        <React.Fragment>


               <ButtonDisplayDogData/>
               <div id="dog-info">Här kommer det synas</div>

        </React.Fragment>
  
    );
  }
}


const fetchAllDataa = async () => {

   // const result = await fetchAllData()
    // do something else here after fetchAllData completes
    console.log(dogDataRows)

     const divEle = document.getElementById("dog-info")

    // dogDataRows.forEach(props => {
    dogDataRows.forEach(props => {
      const newDog = document.createElement("p")
      newDog.textContent = props.name + "  " + props.sex

      divEle.appendChild(newDog)

    });
 
}

function AddRow(props){
  
  let propVal = props.mValue;

  return(
     <p>
      {propVal}  
    </p>
  );
}

function Card(props) {
  // const { row } = props;

  return (
    <React.Fragment>

        <Container className='card-container' style={cardStyle} component={Paper}>
            <ImageContainer props={props}/>
            <InfoContainer props={props}/>
       </Container>
    </React.Fragment>
  );
}

function CreateTable() {
  return (
    <React.Fragment>
        {dogDataRows.map((row) => (
            <Card key={row.breed} row={row} />
          ))}
    </React.Fragment>
  );
}

function InfoContainer(props){

  const { row } = props.props;
  const dogInfo = convertToProperCase(row.breed) + ', ' + row.age + ' år, ' + row.sex 
  
  var dogOwnerInfo = ''
  row.owner.map((owner) => (
     dogOwnerInfo = convertToProperCase(owner.name) + ' ' + owner.lastName + ' - ' + owner.phoneNumber
  ))

  return (
    <React.Fragment>
        <div className="dog-name">
            {row.name}
          </div>

          <div className="dog-info">

              <AddRow mValue={dogInfo}/>
              <AddRow mValue={dogOwnerInfo}/>

          </div>

    </React.Fragment>
  );

      
}

function ImageContainer(props) {
  const { row } = props.props;

  const imageStyle = {
    width: "100%",
    height: 300,
    background: `url(${row.img})`,
    borderRadius: 5,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat"
  };

  return (
    <React.Fragment>
        <Container style={imageStyle}/>
    </React.Fragment>
  );
}

export default DogInfo;