import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import _ from 'lodash';
import mathjs from 'mathjs';
import Datasheet from 'react-datasheet/lib/DataSheet';
import 'react-datasheet/lib/react-datasheet.css'; 
import Checkbox from 'rc-checkbox';
import $ from "jquery";
//asdasd
 
function userCheckboxOnChange(e) {
  console.log('Checkbox1 checked:', (e.target.checked));  
  if ( e.target.checked == true) {    
    $('.rf-checcked').hide();       
    $('.rrf').hide();    
    $('.rf-uncheccked').show();
    $('.rrf-checked ').show(); 
    if ($('.rc-checkbox-checked.tab-user-checkbox')==null){
      $('.c-mg-l-AN-SAMPLE-CHECKED').hide();
      $('.c-mg-l-AN-SAMPLE-UNCHECKED').hide();
      $('.c-mg-l-AN-SAMPLE-CHECKED-UNCHECKED').show()
    }      
  } else {
    $('.rf-checcked').show();   
    $('.rrf').show();
    $('.rf-uncheccked').hide();
    $('.rrf-checked ').hide();
    if ($('.rc-checkbox-checked.tab-user-checkbox')==null){
      $('.c-mg-l-AN-SAMPLE-UNCHECKED').show();   
      $('.c-mg-l-AN-SAMPLE-CHECKED-UNCHECKED').hide(); 
    }     
  }
} 

function tabUserCheckboxOnChange(e) {
  console.log('tabCheckbox2 checked:', (e.target.checked));
  
  if ( e.target.checked == true) {    
    $('.c-mg-l-AN-SAMPLE-CHECKED').show();
    $('.c-mg-l-AN-SAMPLE-UNCHECKED').hide();
    $('.c-mg-l-AN-SAMPLE-CHECKED-UNCHECKED').hide();    
  } else {
    $('.c-mg-l-AN-SAMPLE-CHECKED').hide();
    $('.c-mg-l-AN-SAMPLE-UNCHECKED').show();      
  }
    
}

export default class App extends Component {
 
  cellValueViewer(cell, i) {
            // console.log(cell);
            // console.log(i);

            // return cell.expr;

            // if(this.state[cell.value]) {
                  
            //       return this.state[cell.value].value;
            // }

            return cell.value;
      }

  constructor(props) {
    super(props)
    this.onCellsChanged = this.onCellsChanged.bind(this);
    this.cellValueViewer = this.cellValueViewer.bind(this);
    this.state = {
      'A1': {key: 'A1', value: 'STANDARD SOLUTION:', expr: '', colSpan: 2, readOnly: true, className:'group-header'},
      'A2': {key: 'A2', value: '№', expr: '', readOnly: true, className:'column-header'},
      'A3': {key: 'A3', value: '', expr: '', readOnly: true, className:'hidden-row'},
      'A4': {key: 'A4', value: '1', expr: '', readOnly: true, className:'number-column'},
      'A5': {key: 'A5', value: '2', expr: '', readOnly: true, className:'number-column'},
      'A6': {key: 'A6', value: '3', expr: '', readOnly: true, className:'number-column'},
      'A7': {key: 'A7', value: '4', expr: '', readOnly: true, className:'number-column'},
      'A8': {key: 'A8', value: '5', expr: '', readOnly: true, className:'number-column'},
      'A9': {key: 'A9', value: '6', expr: '', readOnly: true, className:'number-column'},
      'A10': {key: 'A10', value: '7', expr: '', readOnly: true, className:'number-column'},
      'A11': {key: 'A11', value: '8', expr: '', readOnly: true, className:'number-column'},
      'A12': {key: 'A12', value: '9', expr: '', readOnly: true, className:'number-column'},
      'A13': {key: 'A13', value: '10', expr: '', readOnly: true, className:'number-column'},
      'A14': {key: 'A14', value: '11', expr: '', readOnly: true, className:'number-column ethanol'},
      'A15': {key: 'A15', value: '12', expr: '', readOnly: true, className:'number-column'},
      'A16': {key: 'A16', value: '13', expr: '', readOnly: true, className:'number-column'},
      'A17': {key: 'A17', value: '14', expr: '', readOnly: true, className:'number-column'},
      'A18': {key: 'A18', value: '15', expr: '', readOnly: true, className:'number-column'},
      'A19': {key: 'A19', value: '16', expr: '', readOnly: true, className:'number-column'},
      'A20': {key: 'A20', value: '17', expr: '', readOnly: true, className:'number-column'},
      'A21': {key: 'A21', value: '18', expr: '', readOnly: true, className:'number-column'},
      'A22': {key: 'A22', value: '19', expr: '', readOnly: true, className:'number-column'},
      'A23': {key: 'A23', value: '20', expr: '', readOnly: true, className:'number-column'},
      'A24': {key: 'A24', value: '21', expr: '', readOnly: true, className:'number-column'},
      'A25': {key: 'A25', value: '22', expr: '', readOnly: true, className:'number-column'},
      'A26': {key: 'A26', value: '23', expr: '', readOnly: true, className:'number-column'},
      'A27': {key: 'A27', value: '24', expr: '', readOnly: true, className:'number-column'},
      'A28': {key: 'A28', value: '25', expr: '', readOnly: true, className:'number-column'},
      'A29': {key: 'A29', value: '26', expr: '', readOnly: true, className:'number-column'},
      'A30': {key: 'A30', value: '27', expr: '', readOnly: true, className:'number-column'},
      'A31': {key: 'A31', value: '28', expr: '', readOnly: true, className:'number-column'},
      'A32': {key: 'A32', value: '29', expr: '', readOnly: true, className:'number-column internal-standart'}, 
      'A33': {key: 'A33', value: ' ', expr: '', readOnly: true}, 
      'A34': {key: 'A34', value: ' ', expr: '', readOnly: true}, 
      'A35': {key: 'A35', value: ' ', expr: '', readOnly: true}, 
      'A36': {key: 'A36', value: ' ', expr: '', readOnly: true},
      'A37': {key: 'A37', value: ' ', expr: '', readOnly: true}, 
      'A38': {key: 'A38', value: '', expr: '', readOnly: true, className: ''},
      'A39': {key: 'A39', value: '', expr: '', readOnly: true, className: ''},
      'A40': {key: 'A40', value: '', expr: '', readOnly: true, className: ''},
      'A41': {key: 'A41', value: '', expr: '', readOnly: true, className: ''}, 
      
    
      'B2': {key: 'B2', value: 'Compound', expr: '', readOnly: true, className:'column-header'},
      'B3': {key: 'B3', value: '', expr: '', readOnly: true, className:'hidden-row'},
      'B4': {key: 'B4', value: 'acetaldehyde', expr: '', readOnly: true,  className:'compound-column'},
      'B5': {key: 'B5', value: 'isobutyraldehyde', expr: '', readOnly: true, className:'compound-column'},
      'B6': {key: 'B6', value: 'ethyl formate', expr: '', readOnly: true, className:'compound-column'},
      'B7': {key: 'B7', value: 'aceton', expr: '', readOnly: true, className:'compound-column'},
      'B8': {key: 'B8', value: 'diethylformal', expr: '', readOnly: true, className:'compound-column'},
      'B9': {key: 'B9', value: 'methyl acetate', expr: '', readOnly: true, className:'compound-column'},
      'B10': {key: 'B10', value: 'ethyl acetate ', expr: '', readOnly: true, className:'compound-column'},
      'B11': {key: 'B11', value: '2-butanone', expr: '', readOnly: true, className:'compound-column'},
      'B12': {key: 'B12', value: 'methanol', expr: '', readOnly: true, className:'compound-column'},
      'B13': {key: 'B13', value: '2-propanol', expr: '', readOnly: true, className:'compound-column'},
      'B14': {key: 'B14', value: 'ethanol (advanced IS)', expr: '', readOnly: true, className:'compound-column ethanol'},
      'B15': {key: 'B15', value: 'diacetyl', expr: '', readOnly: true, className:'compound-column'},
      'B16': {key: 'B16', value: '2-butanol', expr: '', readOnly: true, className:'compound-column'},
      'B17': {key: 'B17', value: '1-propanol', expr: '', readOnly: true, className:'compound-column'},
      'B18': {key: 'B18', value: 'isobutyl alc.', expr: '', readOnly: true, className:'compound-column'},
      'B19': {key: 'B19', value: 'isoamyl acetate', expr: '', readOnly: true, className:'compound-column'},
      'B20': {key: 'B20', value: '1-butanol', expr: '', readOnly: true, className:'compound-column'},
      'B21': {key: 'B21', value: 'isoamyl alc. ', expr: '', readOnly: true, className:'compound-column'},
      'B22': {key: 'B22', value: 'ethylcaproate', expr: '', readOnly: true, className:'compound-column'},
      'B23': {key: 'B23', value: 'hexanol', expr: '', readOnly: true, className:'compound-column'},
      'B24': {key: 'B24', value: 'ethyllactate', expr: '', readOnly: true, className:'compound-column'},
      'B25': {key: 'B25', value: 'ethylcaprylate', expr: '', readOnly: true, className:'compound-column'},
      'B26': {key: 'B26', value: '2-phenylethanol', expr: '', readOnly: true, className:'compound-column'},
      /* Additional inputs for user */ 
      'B27': {key: 'B27', value: 'ethyl hexanoate', expr: '', className:'compound-column user-input'},
      'B28': {key: 'B28', value: 'ethyl octanoate', expr: '', className:'compound-column user-input'},
      'B29': {key: 'B29', value: 'ethyl decanoate', expr: '', className:'compound-column user-input'},
      'B30': {key: 'B30', value: 'benzyl alcohol', expr: '', className:'compound-column user-input'},
      'B31': {key: 'B31', value: 'phenylethanol', expr: '', className:'compound-column user-input'},
      'B32': {key: 'B32', value: 'Internal Standard (IS)', expr: '', readOnly: true, className:'compound-column internal-standart'},
      'B33': {key: 'B33', value: ' ', expr: '', readOnly: true}, 
      'B34': {key: 'B34', value: ' ', expr: '', readOnly: true}, 
      'B35': {key: 'B35', value: ' ', expr: '', readOnly: true}, 
      'B36': {key: 'B36', value: ' ', expr: '', readOnly: true},
      'B37': {key: 'B37', value: ' ', expr: '', readOnly: true},  
      'B38': {key: 'B38', value: '', expr: '', readOnly: true, className: ''},
      'B39': {key: 'B39', value: '', expr: '', readOnly: true, className: ''},
      'B40': {key: 'B40', value: '', expr: '', readOnly: true, className: ''},
      'B41': {key: 'B41', value: '', expr: '', readOnly: true, className: ''},
    
    
      'C1': {key: 'C1', value: '"C" (according EC 2870/2000) ', expr: '', colSpan: 3, readOnly: true, className:'group-header'},
      'C2': {key: 'C2', value: 'Concentration,  mg/kg', expr: '', readOnly: true, className:'column-header'},
      'C3': {key: 'C3', value: '', expr: '', className:'hidden-row'},
      'C4': {key: 'C4', value: '140.898232356557', expr: '', className: 'c-user-mg-kg user-input'},
      'C5': {key: 'C5', value: '0', expr: '', className: 'c-user-mg-kg user-input'},
      'C6': {key: 'C6', value: '0', expr: '', className: 'c-user-mg-kg user-input'},
      'C7': {key: 'C7', value: '0', expr: '', className: 'c-user-mg-kg user-input'},
      'C8': {key: 'C8', value: '0', expr: '', className: 'c-user-mg-kg user-input'},
      'C9': {key: 'C9', value: '207.021242707803', expr: '', className:'c-user-mg-kg user-input'},
      'C10': {key: 'C10', value: '200.333914120529', expr: '', className: 'c-user-mg-kg user-input'},
      'C11': {key: 'C11', value: '0', expr: '', className: 'c-user-mg-kg user-input'},
      'C12': {key: 'C12', value: '226.219689255912', expr: '', className: 'c-user-mg-kg user-input'},
      'C13': {key: 'C13', value: '220.823388089732', expr: '', className: 'c-user-mg-kg user-input'},
      'C14': {key: 'C14', value: '', expr: '', readOnly: true, className: 'c-user-mg-kg ethanol'},
      'C15': {key: 'C15', value: '0', expr: '', className: 'c-user-mg-kg user-input'},
      'C16': {key: 'C16', value: '0', expr: '', className: 'c-user-mg-kg user-input'},
      'C17': {key: 'C17', value: '229.855417291611', expr: '', className: 'c-user-mg-kg user-input'},
      'C18': {key: 'C18', value: '229.972914791117', expr: '', className: 'c-user-mg-kg user-input'},
      'C19': {key: 'C19', value: '0', expr: '', className: 'c-user-mg-kg user-input'},
      'C20': {key: 'C20', value: '223.727312981809', expr: '', className: 'c-user-mg-kg user-input'},
      'C21': {key: 'C21', value: '228.957034373472', expr: '', className: 'c-user-mg-kg user-input'},
      'C22': {key: 'C22', value: '0', expr: '', className: 'c-user-mg-kg user-input'},
      'C23': {key: 'C23', value: '0', expr: '', className: 'c-user-mg-kg user-input'},
      'C24': {key: 'C24', value: '0', expr: '', className: 'c-user-mg-kg user-input'},
      'C25': {key: 'C25', value: '0', expr: '', className: 'c-user-mg-kg user-input'},
      'C26': {key: 'C26', value: '0', expr: '', className: 'c-user-mg-kg user-input'},
      'C27': {key: 'C27', value: '0', expr: '', className: 'c-user-mg-kg user-input'},
      'C28': {key: 'C28', value: '0', expr: '', className: 'c-user-mg-kg user-input'},
      'C29': {key: 'C29', value: '0', expr: '', className: 'c-user-mg-kg user-input'},
      'C30': {key: 'C30', value: '0', expr: '', className: 'c-user-mg-kg user-input'},
      'C31': {key: 'C31', value: '0', expr: '', className: 'c-user-mg-kg user-input'},
      'C32': {key: 'C32', value: '26.8599332955507', expr: '', className: 'c-user-mg-kg user-input internal-standart'},
      'C33': {key: 'C33', value: ' ', expr: '', readOnly: true}, 
      'C34': {key: 'C34', value: ' ', expr: '', readOnly: true}, 
      'C35': {key: 'C35', value: ' ', expr: '', readOnly: true}, 
      'C36': {key: 'C36', value: ' ', expr: '', readOnly: true},
      'C37': {key: 'C37', value: ' ', expr: '', readOnly: true},  
      'C38': {key: 'C38', value: '', expr: '', readOnly: true, className: ''},
      'C39': {key: 'C39', value: '', expr: '', readOnly: true, className: ''},
      'C40': {key: 'C40', value: '', expr: '', readOnly: true, className: ''},
      'C41': {key: 'C41', value: '', expr: '', readOnly: true, className: ''},
    
      
      'D2': {key: 'D2', value: 'Concentration,  mg/L AA', expr: '', readOnly: true, className: 'column-header'},
      'D3': {key: 'D3', value: '', expr: '', className:'hidden-row'},
      'D4': {key: 'D4', value: 140.898232356557 * 0.94806 * 2.5, valueViewer: this.cellValueViewer, expr: '=C4*0.94806*2.5', readOnly: true, className: 'c-mg-l'},
      'D5': {key: 'D5', value: 0*0.94806*2.5, expr: '=C5*0.94806*2.5 ', valueViewer: this.cellValueViewer, readOnly: true, className: 'c-mg-l'},
      'D6': {key: 'D6', value: 0*0.94806*2.5, expr: '=C6*0.94806*2.5', valueViewer: this.cellValueViewer, readOnly: true, className: 'c-mg-l'},
      'D7': {key: 'D7', value: 0*0.94806*2.5, expr: '=C7*0.94806*2.5', valueViewer: this.cellValueViewer, readOnly: true, className: 'c-mg-l'},
      'D8': {key: 'D8', value: 0*0.94806*2.5, expr: '=C8*0.94806*2.5', valueViewer: this.cellValueViewer, readOnly: true, className: 'c-mg-l'},
      'D9': {key: 'D9', value: 207.021242707803*0.94806*2.5, expr: '=C9*0.94806*2.5', valueViewer: this.cellValueViewer, readOnly: true, className: 'c-mg-l'},
      'D10': {key: 'D10', value: 200.333914120529*0.94806*2.5, expr: '=C10*0.94806*2.5', valueViewer: this.cellValueViewer, readOnly: true, className: 'c-mg-l'},
      'D11': {key: 'D11', value: 0*0.94806*2.5, expr: '=C11*0.94806*2.5', valueViewer: this.cellValueViewer, readOnly: true, className: 'c-mg-l'},
      'D12': {key: 'D12', value: 226.219689255912*0.94806*2.5, expr: '=C12*0.94806*2.5', valueViewer: this.cellValueViewer, readOnly: true, className: 'c-mg-l'},
      'D13': {key: 'D13', value: 220.823388089732*0.94806*2.5, expr: '=C13*0.94806*2.5', valueViewer: this.cellValueViewer, readOnly: true, className: 'c-mg-l'},
      'D14': {key: 'D14', value: 789300, expr: '', valueViewer: this.cellValueViewer, readOnly: true, className: 'c-mg-l ethanol'}, 
      'D15': {key: 'D15', value: 0*0.94806*2.5, expr: '=C15*0.94806*2.5', valueViewer: this.cellValueViewer, readOnly: true, className: 'c-mg-l'},
      'D16': {key: 'D16', value: 0*0.94806*2.5, expr: '=C16*0.94806*2.5', valueViewer: this.cellValueViewer, readOnly: true, className: 'c-mg-l'},
      'D17': {key: 'D17', value: 229.855417291611*0.94806*2.5, expr: '=C17*0.94806*2.5', valueViewer: this.cellValueViewer, readOnly: true, className: 'c-mg-l'},
      'D18': {key: 'D18', value: 229.972914791117*0.94806*2.5, expr: '=C18*0.94806*2.5', valueViewer: this.cellValueViewer, readOnly: true, className: 'c-mg-l'},
      'D19': {key: 'D19', value: 0*0.94806*2.5, expr: '=C19*0.94806*2.5', valueViewer: this.cellValueViewer, readOnly: true, className: 'c-mg-l'},
      'D20': {key: 'D20', value: 223.727312981809*0.94806*2.5, expr: '=C20*0.94806*2.5', valueViewer: this.cellValueViewer, readOnly: true, className: 'c-mg-l'},
      'D21': {key: 'D21', value: 228.957034373472*0.94806*2.5, expr: '=C21*0.94806*2.5', valueViewer: this.cellValueViewer, readOnly: true, className: 'c-mg-l'},
      'D22': {key: 'D22', value: 0*0.94806*2.5, expr: '=C22*0.94806*2.5', valueViewer: this.cellValueViewer, readOnly: true, className: 'c-mg-l'},
      'D23': {key: 'D23', value: 0*0.94806*2.5, expr: '=C23*0.94806*2.5', valueViewer: this.cellValueViewer, readOnly: true, className: 'c-mg-l'},
      'D24': {key: 'D24', value: 0*0.94806*2.5, expr: '=C24*0.94806*2.5', valueViewer: this.cellValueViewer, readOnly: true, className: 'c-mg-l'},
      'D25': {key: 'D25', value: 0*0.94806*2.5, expr: '=C25*0.94806*2.5', valueViewer: this.cellValueViewer, readOnly: true, className: 'c-mg-l'},
      'D26': {key: 'D26', value: 0*0.94806*2.5, expr: '=C26*0.94806*2.5', valueViewer: this.cellValueViewer, readOnly: true, className: 'c-mg-l'},
      'D27': {key: 'D27', value: 0*0.94806*2.5, expr: '=C27*0.94806*2.5', valueViewer: this.cellValueViewer, readOnly: true, className: 'c-mg-l'},
      'D28': {key: 'D28', value: 0*0.94806*2.5, expr: '=C28*0.94806*2.5', valueViewer: this.cellValueViewer, readOnly: true, className: 'c-mg-l'},
      'D29': {key: 'D29', value: 0*0.94806*2.5, expr: '=C29*0.94806*2.5', valueViewer: this.cellValueViewer, readOnly: true, className: 'c-mg-l'},
      'D30': {key: 'D30', value: 0*0.94806*2.5, expr: '=C30*0.94806*2.5', valueViewer: this.cellValueViewer, readOnly: true, className: 'c-mg-l'},
      'D31': {key: 'D31', value: 0*0.94806*2.5, expr: '=C31*0.94806*2.5', valueViewer: this.cellValueViewer, readOnly: true, className: 'c-mg-l'},
      'D32': {key: 'D32', value: 26.8599332955507*0.94806*2.5, expr: '=C32*0.94806*2.5', valueViewer: this.cellValueViewer, readOnly: true, className: 'c-mg-l internal-standart'},
      'D33': {key: 'D33', value: ' ', expr: '', readOnly: true}, 
      'D34': {key: 'D34', value: ' ', expr: '', readOnly: true}, 
      'D35': {key: 'D35', value: ' ', expr: '', readOnly: true}, 
      'D36': {key: 'D36', value: ' ', expr: '', readOnly: true},
      'D37': {key: 'D37', value: ' ', expr: '', readOnly: true},   
      'D38': {key: 'D38', value: '', expr: '', readOnly: true, className: ''},
      'D39': {key: 'D39', value: '', expr: '', readOnly: true, className: ''},
      'D40': {key: 'D40', value: '', expr: '', readOnly: true, className: ''},
      'D41': {key: 'D41', value: '', expr: '', readOnly: true, className: ''},
    
      
      'E2': {key: 'E2', value: 'Concentration,  mg/L AA', expr: '', readOnly: true, className: 'column-header'},
      'E3': {key: 'E3', value: '', expr: '', className:'hidden-row'},
      'E4': {key: 'E4', value: '345.87', expr: '', className: 'c-user-mg-l user-input'},
      'E5': {key: 'E5', value: '0', expr: '', className: 'c-user-mg-l user-input'},
      'E6': {key: 'E6', value: '0', expr: '', className: 'c-user-mg-l user-input'},
      'E7': {key: 'E7', value: '0', expr: '', className: 'c-user-mg-l user-input'},
      'E8': {key: 'E8', value: '0', expr: '', className: 'c-user-mg-l user-input'},
      'E9': {key: 'E9', value: '512.33', expr: '', className: 'c-user-mg-l user-input'},
      'E10': {key: 'E10', value: '429.6', expr: '', className: 'c-user-mg-l user-input'},
      'E11': {key: 'E11', value: '0', expr: '', className: 'c-user-mg-l user-input'},
      'E12': {key: 'E12', value: '244.81', expr: '', className: 'c-user-mg-l user-input'},
      'E13': {key: 'E13', value: '497.32', expr: '', className: 'c-user-mg-l user-input'},
      'E14': {key: 'E14', value: '789300', expr: '', readOnly: true, className: 'c-user-mg-l ethanol'}, 
      'E15': {key: 'E15', value: '0', expr: '', className: 'c-user-mg-l user-input'},
      'E16': {key: 'E16', value: '0', expr: '', className: 'c-user-mg-l user-input'},
      'E17': {key: 'E17', value: '522.18', expr: '', className: 'c-user-mg-l user-input'},
      'E18': {key: 'E18', value: '592.24', expr: '', className: 'c-user-mg-l user-input'},
      'E19': {key: 'E19', value: '0', expr: '', className: 'c-user-mg-l user-input'},
      'E20': {key: 'E20', value: '520.41', expr: '', className: 'c-user-mg-l user-input'},
      'E21': {key: 'E21', value: '563.93', expr: '', className: 'c-user-mg-l user-input'},
      'E22': {key: 'E22', value: '0', expr: '', className: 'c-user-mg-l user-input'},
      'E23': {key: 'E23', value: '0', expr: '', className: 'c-user-mg-l user-input'},
      'E24': {key: 'E24', value: '0', expr: '', className: 'c-user-mg-l user-input'}, 
      'E25': {key: 'E25', value: '0', expr: '', className: 'c-user-mg-l user-input'},
      'E26': {key: 'E26', value: '0', expr: '', className: 'c-user-mg-l user-input'},
      'E27': {key: 'E27', value: '0', expr: '', className: 'c-user-mg-l user-input'},
      'E28': {key: 'E28', value: '0', expr: '', className: 'c-user-mg-l user-input'},
      'E29': {key: 'E29', value: '0', expr: '', className: 'c-user-mg-l user-input'},
      'E30': {key: 'E30', value: '0', expr: '', className: 'c-user-mg-l user-input'},
      'E31': {key: 'E31', value: '0', expr: '', className: 'c-user-mg-l user-input'}, 
      'E32': {key: 'E32', value: '0', expr: '', readOnly: true, className: 'c-user-mg-l internal-standart'},
      'E33': {key: 'E33', value: ' ', expr: '', readOnly: true}, 
      'E34': {key: 'E34', value: ' ', expr: '', readOnly: true}, 
      'E35': {key: 'E35', value: ' ', expr: '', readOnly: true}, 
      'E36': {key: 'E36', value: ' ', expr: '', readOnly: true}, 
      'E37': {key: 'E37', value: ' ', expr: '', readOnly: true},
      'E38': {key: 'E38', value: '', expr: '', readOnly: true, className: ''},
      'E39': {key: 'E39', value: '', expr: '', readOnly: true, className: ''},
      'E40': {key: 'E40', value: '', expr: '', readOnly: true, className: ''},
      'E41': {key: 'E41', value: '', expr: '', readOnly: true, className: ''},
    
      
      'F2': {key: 'F2', value: 'Response', expr: '', readOnly: true, className: 'column-header'},
      'F3': {key: 'F3', value: '', expr: '', className:'hidden-row'},
      'F4': {key: 'F4', value: '1241.59967059221', expr: '', className: 'response user-input'},
      'F5': {key: 'F5', value: '0', expr: '', className: 'response user-input'},
      'F6': {key: 'F6', value: '0', expr: '', className: 'response user-input'},
      'F7': {key: 'F7', value: '0', expr: '', className: 'response user-input'},
      'F8': {key: 'F8', value: '0', expr: '', className: 'response user-input'},
      'F9': {key: 'F9', value: '2603.53731726328', expr: '', className: 'response user-input'},
      'F10': {key: 'F10', value: '3424.16057527552', expr: '', className: 'response user-input'},
      'F11': {key: 'F11', value: '0', expr: '', className: 'response user-input'},
      'F12': {key: 'F12', value: '3078.69578189191', expr: '', className: 'response user-input'},
      'F13': {key: 'F13', value: '4741.1209851483', expr: '', className: 'response user-input'},
      'F14': {key: 'F14', value: '5637986.6877231', expr: '', className: 'response user-input ethanol'}, 
      'F15': {key: 'F15', value: '0', expr: '', className: 'response user-input'},
      'F16': {key: 'F16', value: '0', expr: '', className: 'response user-input'},
      'F17': {key: 'F17', value: '5780.95322661609', expr: '', className: 'response user-input'},
      'F18': {key: 'F18', value: '6983.55662204942', expr: '', className: 'response user-input'},
      'F19': {key: 'F19', value: '0', expr: '', className: 'response user-input'},
      'F20': {key: 'F20', value: '6211.56012942138', expr: '', className: 'response user-input'},
      'F21': {key: 'F21', value: '6901.08773714927', expr: '', className: 'response user-input'},
      'F22': {key: 'F22', value: '0', expr: '', className: 'response user-input'},
      'F23': {key: 'F23', value: '0', expr: '', className: 'response user-input'},
      'F24': {key: 'F24', value: '0', expr: '', className: 'response user-input'},
      'F25': {key: 'F25', value: '0', expr: '', className: 'response user-input'},
      'F26': {key: 'F26', value: '0', expr: '', className: 'response user-input'},
      'F27': {key: 'F27', value: '0', expr: '', className: 'response user-input'},
      'F28': {key: 'F28', value: '0', expr: '', className: 'response user-input'},
      'F29': {key: 'F29', value: '0', expr: '', className: 'response user-input'},
      'F30': {key: 'F30', value: '0', expr: '', className: 'response user-input'},
      'F31': {key: 'F31', value: '0', expr: '', className: 'response user-input'},
      'F32': {key: 'F32', value: '853.614780485634', expr: '', className: 'response user-input internal-standart'},
      'F33': {key: 'F33', value: ' ', expr: '', readOnly: true}, 
      'F34': {key: 'F34', value: ' ', expr: '', readOnly: true}, 
      'F35': {key: 'F35', value: ' ', expr: '', readOnly: true}, 
      'F36': {key: 'F36', value: ' ', expr: '', readOnly: true},
      'F37': {key: 'F37', value: ' ', expr: '', readOnly: true}, 
      'F38': {key: 'F38', value: '', expr: '', readOnly: true, className: ''},
      'F39': {key: 'F39', value: '', expr: '', readOnly: true, className: ''},
      'F40': {key: 'F40', value: '', expr: '', readOnly: true, className: ''},
      'F41': {key: 'F41', value: '', expr: '', readOnly: true, className: ''},
    
      'G1': {key: 'G1', value: 'Ethanol', colSpan: 4, expr: '', readOnly: true, className:'group-header'},
      'G2': {key: 'G2', value: 'RF', expr: '', readOnly: true, className: 'column-header rf-void'},
      'G3': {key: 'G3', value: '', expr: '', readOnly: true, className:'hidden-row rf-void'},
      'G4': {key: 'G4', value: '0', expr: '', readOnly: true, className: 'rf-void'},
      'G5': {key: 'G5', value: '0', expr: '', readOnly: true,  className: 'rf-void'},
      'G6': {key: 'G6', value: '0', expr: '', readOnly: true, className: 'rf-void'},
      'G7': {key: 'G7', value: '0', expr: '', readOnly: true, className: 'rf-void'},
      'G8': {key: 'G8', value: '0', expr: '', readOnly: true, className: 'rf-void'},
      'G9': {key: 'G9', value: '0', expr: '', readOnly: true, className: 'rf-void'},
      'G10': {key: 'G10', value: '0', expr: '', readOnly: true, className: 'rf-void'},
      'G11': {key: 'G11', value: '0', expr: '', readOnly: true, className: 'rf-void'},
      'G12': {key: 'G12', value: '0', expr: '', readOnly: true, className: 'rf-void'},
      'G13': {key: 'G13', value: '0', expr: '', readOnly: true, className: 'rf-void'},
      'G14': {key: 'G14', value: '0', expr: '', readOnly: true, className: 'rf-void ethanol'},
      'G15': {key: 'G15', value: '0', expr: '', readOnly: true, className: 'rf-void'},
      'G16': {key: 'G16', value: '0', expr: '', readOnly: true, className: 'rf-void'},
      'G17': {key: 'G17', value: '0', expr: '', readOnly: true, className: 'rf-void'},
      'G18': {key: 'G18', value: '0', expr: '', readOnly: true, className: 'rf-void'},
      'G19': {key: 'G19', value: '0', expr: '', readOnly: true, className: 'rf-void'},
      'G20': {key: 'G20', value: '0', expr: '', readOnly: true, className: 'rf-void'},
      'G21': {key: 'G21', value: '0', expr: '', readOnly: true, className: 'rf-void'},
      'G22': {key: 'G22', value: '0', expr: '', readOnly: true, className: 'rf-void'},
      'G23': {key: 'G23', value: '0', expr: '', readOnly: true, className: 'rf-void'}, 
      'G24': {key: 'G24', value: '0', expr: '', readOnly: true, className: 'rf-void'},
      'G25': {key: 'G25', value: '0', expr: '', readOnly: true, className: 'rf-void'},
      'G26': {key: 'G26', value: '0', expr: '', readOnly: true, className: 'rf-void'},
      'G27': {key: 'G27', value: '0', expr: '', readOnly: true, className: 'rf-void'},
      'G28': {key: 'G28', value: '0', expr: '', readOnly: true, className: 'rf-void'},
      'G29': {key: 'G29', value: '0', expr: '', readOnly: true, className: 'rf-void'},
      'G30': {key: 'G30', value: '0', expr: '', readOnly: true, className: 'rf-void'},
      'G31': {key: 'G31', value: '0', expr: '', readOnly: true, className: 'rf-void'},
      'G32': {key: 'G32', value: '0', expr: '', readOnly: true, className: 'rf-void internal-standart'},
      'G33': {key: 'G33', value: ' ', expr: '', readOnly: true}, 
      'G34': {key: 'G34', value: ' ', expr: '', readOnly: true}, 
      'G35': {key: 'G35', value: ' ', expr: '', readOnly: true}, 
      'G36': {key: 'G36', value: ' ', expr: '', readOnly: true},
      'G37': {key: 'G37', value: ' ', expr: '', readOnly: true},
      'G38': {key: 'G38', value: '', expr: '', readOnly: true, className: ''},
      'G39': {key: 'G39', value: '', expr: '', readOnly: true, className: ''},
      'G40': {key: 'G40', value: '', expr: '', readOnly: true, className: ''},
      'G41': {key: 'G41', value: '', expr: '', readOnly: true, className: ''},
    
      'H2': {key: 'H2', value: 'RF', expr: '', readOnly: true, className: 'column-header rf-checcked'},
      'H3': {key: 'H3', value: '', expr: '', readOnly: true, className:'hidden-row rf-checcked'},
      'H4': {key: 'H4', value: 345.87/1241.59967059221, expr: '= F4==0 ? 0 : E4/F4', readOnly: true, className: 'rf-checcked'},
      'H5': {key: 'H5', value: '', expr: '= F5==0 ? 0 : E5/F5', readOnly: true, className: 'rf-checcked'},
      'H6': {key: 'H6', value: '', expr: '= F6==0 ? 0 : E6/F6', readOnly: true, className: 'rf-checcked'},
      'H7': {key: 'H7', value: '', expr: '= F7==0 ? 0 : E7/F7', readOnly: true, className: 'rf-checcked'},
      'H8': {key: 'H8', value: '', expr: '= F8==0 ? 0 : E8/F8', readOnly: true, className: 'rf-checcked'},
      'H9': {key: 'H9', value: 512.33/2603.53731726328, expr: '= F9==0 ? 0 : E9/F9', readOnly: true, className: 'rf-checcked'},
      'H10': {key: 'H10', value: 429.6/3424.16057527552, expr: '= F10==0 ? 0 : E10/F10', readOnly: true, className: 'rf-checcked'},
      'H11': {key: 'H11', value: '', expr: '= F11==0 ? 0 : E11/F11', readOnly: true, className: 'rf-checcked'},
      'H12': {key: 'H12', value: 244.81/3078.69578189191, expr: '= F12==0 ? 0 : E12/F12', readOnly: true, className: 'rf-checcked'},
      'H13': {key: 'H13', value: 497.32/4741.121, expr: '= F13==0 ? 0 : E13/F13', readOnly: true, className: 'rf-checcked'},
      'H14': {key: 'H14', value: 789300/5637986.688, expr: '= F14==0 ? 0 : E14/F14', readOnly: true, className: 'rf-checcked ethanol'}, 
      'H15': {key: 'H15', value: '', expr: '= F15==0 ? 0 : E15/F15', readOnly: true, className: 'rf-checcked'},
      'H16': {key: 'H16', value: '', expr: '= F16==0 ? 0 : E16/F16', readOnly: true, className: 'rf-checcked'},
      'H17': {key: 'H17', value: 522.180/5780.953, expr: '= F17==0 ? 0 : E17/F17', readOnly: true, className: 'rf-checcked'},
      'H18': {key: 'H18', value: 592.240/6983.557, expr: '= F18==0 ? 0 : E18/F18', readOnly: true, className: 'rf-checcked'},
      'H19': {key: 'H19', value: '', expr: '= F19==0 ? 0 : E19/F19', readOnly: true, className: 'rf-checcked'},
      'H20': {key: 'H20', value: 520.410/6211.560, expr: '= F20==0 ? 0 : E20/F20', readOnly: true, className: 'rf-checcked'},
      'H21': {key: 'H21', value: 563.930/6901.088, expr: '= F21==0 ? 0 : E21/F21', readOnly: true, className: 'rf-checcked'},
      'H22': {key: 'H22', value: '', expr: '= F22==0 ? 0 : E22/F22', readOnly: true, className: 'rf-checcked'},
      'H23': {key: 'H23', value: '', expr: '= F23==0 ? 0 : E23/F23', readOnly: true, className: 'rf-checcked'},
      'H24': {key: 'H24', value: '', expr: '= F24==0 ? 0 : E24/F24', readOnly: true, className: 'rf-checcked'},
      'H25': {key: 'H25', value: '', expr: '= F25==0 ? 0 : E25/F25', readOnly: true, className: 'rf-checcked'},
      'H26': {key: 'H26', value: '', expr: '= F26==0 ? 0 : E26/F26', readOnly: true, className: 'rf-checcked'},
      'H27': {key: 'H27', value: '', expr: '= F27==0 ? 0 : E27/F27', readOnly: true, className: 'rf-checcked'},
      'H28': {key: 'H28', value: '', expr: '= F28==0 ? 0 : E28/F28', readOnly: true, className: 'rf-checcked'},
      'H29': {key: 'H29', value: '', expr: '= F29==0 ? 0 : E29/F29', readOnly: true, className: 'rf-checcked'},
      'H30': {key: 'H30', value: '', expr: '= F30==0 ? 0 : E30/F30', readOnly: true, className: 'rf-checcked'},
      'H31': {key: 'H31', value: '', expr: '= F31==0 ? 0 : E31/F31', readOnly: true, className: 'rf-checcked'},
      'H32': {key: 'H32', value: '', expr: '= F32==0 ? 0 : E32/F32', readOnly: true, className: 'rf-checcked internal-standart'},
      'H33': {key: 'H33', value: ' ', expr: '', readOnly: true}, 
      'H34': {key: 'H34', value: ' ', expr: '', readOnly: true}, 
      'H35': {key: 'H35', value: ' ', expr: '', readOnly: true}, 
      'H36': {key: 'H36', value: ' ', expr: '', readOnly: true},
      'H37': {key: 'H37', value: ' ', expr: '', readOnly: true}, 
      'H38': {key: 'H38', value: '', expr: '', readOnly: true, className: ''},
      'H39': {key: 'H39', value: '', expr: '', readOnly: true, className: ''},
      'H40': {key: 'H40', value: '', expr: '', readOnly: true, className: ''},
      'H41': {key: 'H41', value: '', expr: '', readOnly: true, className: ''},
    
      
      'I2': {key: 'I2', value: 'RF', expr: '', readOnly: true, className: 'column-header rf-uncheccked'},
      'I3': {key: 'I3', value: '', expr: '', readOnly: true, className:'hidden-row rf-uncheccked'},
      'I4': {key: 'I4', value: 140.898*0.94806*2.5/1241.600, expr: '= F4==0 ? 0 : D4/F4', readOnly: true, className: 'rf-uncheccked'},
      'I5': {key: 'I5', value: '', expr: '= F5==0 ? 0 : D5/F5', readOnly: true, className: 'rf-uncheccked'},
      'I6': {key: 'I6', value: '', expr: '= F6==0 ? 0 : D6/F6', readOnly: true, className: 'rf-uncheccked'},
      'I7': {key: 'I7', value: '', expr: '= F7==0 ? 0 : D7/F7', readOnly: true, className: 'rf-uncheccked'},
      'I8': {key: 'I8', value: '', expr: '= F8==0 ? 0 : D8/F8', readOnly: true, className: 'rf-uncheccked'},
      'I9': {key: 'I9', value: 207.021*0.94806*2.5/2603.537, expr: '= F9==0 ? 0 : D9/F9', readOnly: true, className: 'rf-uncheccked'},
      'I10': {key: 'I10', value: 200.334*0.94806*2.5/3424.161, expr: '= F10==0 ? 0 : D10/F10', readOnly: true, className: 'rf-uncheccked'},
      'I11': {key: 'I11', value: '', expr: '= F11==0 ? 0 : D11/F11', readOnly: true, className: 'rf-uncheccked'},
      'I12': {key: 'I12', value: 226.220*0.94806*2.5/3078.696, expr: '= F12==0 ? 0 : D12/F12', readOnly: true, className: 'rf-uncheccked'},
      'I13': {key: 'I13', value: 220.823*0.94806*2.5/4741.121, expr: '= F13==0 ? 0 : D13/F13', readOnly: true, className: 'rf-uncheccked'},
      'I14': {key: 'I14', value: 789300/5637986.688, expr: '= F14==0 ? 0 : D14/F14', readOnly: true, className: 'rf-uncheccked ethanol'}, 
      'I15': {key: 'I15', value: '', expr: '= F15==0 ? 0 : D15/F15', readOnly: true, className: 'rf-uncheccked'},
      'I16': {key: 'I16', value: '', expr: '= F16==0 ? 0 : D16/F16', readOnly: true, className: 'rf-uncheccked'},
      'I17': {key: 'I17', value: 229.855*0.94806*2.5/5780.953, expr: '= F17==0 ? 0 : D17/F17', readOnly: true, className: 'rf-uncheccked'},
      'I18': {key: 'I18', value: 229.973*0.94806*2.5/6983.557, expr: '= F18==0 ? 0 : D18/F18', readOnly: true, className: 'rf-uncheccked'},
      'I19': {key: 'I19', value: '', expr: '= F19==0 ? 0 : D19/F19', readOnly: true, className: 'rf-uncheccked'},
      'I20': {key: 'I20', value: 223.727*0.94806*2.5/6211.560, expr: '= F20==0 ? 0 : D20/F20', readOnly: true, className: 'rf-uncheccked'},
      'I21': {key: 'I21', value: 228.957*0.94806*2.5/6901.088, expr: '= F21==0 ? 0 : D21/F21', readOnly: true, className: 'rf-uncheccked'},
      'I22': {key: 'I22', value: '', expr: '= F22==0 ? 0 : D22/F22', readOnly: true, className: 'rf-uncheccked'},
      'I23': {key: 'I23', value: '', expr: '= F23==0 ? 0 : D23/F23', readOnly: true, className: 'rf-uncheccked'},
      'I24': {key: 'I24', value: '', expr: '= F24==0 ? 0 : D24/F24', readOnly: true, className: 'rf-uncheccked'},
      'I25': {key: 'I25', value: '', expr: '= F25==0 ? 0 : D25/F25', readOnly: true, className: 'rf-uncheccked'},
      'I26': {key: 'I26', value: '', expr: '= F26==0 ? 0 : D26/F26', readOnly: true, className: 'rf-uncheccked'},
      'I27': {key: 'I27', value: '', expr: '= F27==0 ? 0 : D27/F27', readOnly: true, className: 'rf-uncheccked'},
      'I28': {key: 'I28', value: '', expr: '= F28==0 ? 0 : D28/F28', readOnly: true, className: 'rf-uncheccked'},
      'I29': {key: 'I29', value: '', expr: '= F29==0 ? 0 : D29/F29', readOnly: true, className: 'rf-uncheccked'},
      'I30': {key: 'I30', value: '', expr: '= F30==0 ? 0 : D30/F30', readOnly: true, className: 'rf-uncheccked'},
      'I31': {key: 'I31', value: '', expr: '= F31==0 ? 0 : D31/F31', readOnly: true, className: 'rf-uncheccked'},
      'I32': {key: 'I32', value: 26.860*0.94806*2.5/853.615, expr: '= F32==0 ? 0 : D32/F32', readOnly: true, className: 'rf-uncheccked internal-standart'},
      'I33': {key: 'I33', value: ' ', expr: '', readOnly: true}, 
      'I34': {key: 'I34', value: ' ', expr: '', readOnly: true}, 
      'I35': {key: 'I35', value: ' ', expr: '', readOnly: true}, 
      'I36': {key: 'I36', value: ' ', expr: '', readOnly: true},
      'I37': {key: 'I37', value: ' ', expr: '', readOnly: true}, 
      'I38': {key: 'I38', value: '', expr: '', readOnly: true, className: ''},
      'I39': {key: 'I39', value: '', expr: '', readOnly: true, className: ''},
      'I40': {key: 'I40', value: '', expr: '', readOnly: true, className: ''},
      'I41': {key: 'I41', value: '', expr: '', readOnly: true, className: ''},

      'J2': {key: 'J2', value: 'RRF exp.', expr: '', readOnly: true, className: 'column-header rrf'},
      'J3': {key: 'J3', value: '', expr: '', readOnly: true, className:'hidden-row rrf'},
      'J4': {key: 'J4', value: 0.279/0.140, expr: '= H14==0 ? 0 : H4/H14', readOnly: true, className: 'rrf'},
      'J5': {key: 'J5', value: '', expr: '= H14==0 ? 0 : H5/H14', readOnly: true,  className: 'rrf'},
      'J6': {key: 'J6', value: '', expr: '= H14==0 ? 0 : H6/H14', readOnly: true, className: 'rrf'},
      'J7': {key: 'J7', value: '', expr: '= H14==0 ? 0 : H7/H14', readOnly: true, className: 'rrf'},
      'J8': {key: 'J8', value: '', expr: '= H14==0 ? 0 : H8/H14', readOnly: true, className: 'rrf'},
      'J9': {key: 'J9', value: 0.197/0.140, expr: '= H14==0 ? 0 : H9/H14', readOnly: true, className: 'rrf'},
      'J10': {key: 'J10', value: 0.125/0.140, expr: '= H14==0 ? 0 : H10/H14', readOnly: true, className: 'rrf'},
      'J11': {key: 'J11', value: '', expr: '= H14==0 ? 0 : H11/H14', readOnly: true, className: 'rrf'},
      'J12': {key: 'J12', value: 0.080/0.140, expr: '= H14==0 ? 0 : H12/H14', readOnly: true, className: 'rrf'},
      'J13': {key: 'J13', value: 0.105/0.140, expr: '= H14==0 ? 0 : H13/H14', readOnly: true, className: 'rrf'},
      'J14': {key: 'J14', value: 0.140/0.140, expr: '= H14==0 ? 0 : H14/H14', readOnly: true, className: 'rrf ethanol'},
      'J15': {key: 'J15', value: '', expr: '= H14==0 ? 0 : H15/H14', readOnly: true, className: 'rrf'},
      'J16': {key: 'J16', value: '', expr: '= H14==0 ? 0 : H16/H14', readOnly: true, className: 'rrf'},
      'J17': {key: 'J17', value: 0.090/0.140, expr: '= H14==0 ? 0 : H17/H14', readOnly: true, className: 'rrf'},
      'J18': {key: 'J18', value: 0.085/0.140, expr: '= H14==0 ? 0 : H18/H14', readOnly: true, className: 'rrf'},
      'J19': {key: 'J19', value: '', expr: '= H14==0 ? 0 : H19/H14', readOnly: true, className: 'rrf'},
      'J20': {key: 'J20', value: 0.084/0.140, expr: '= H14==0 ? 0 : H20/H14', readOnly: true, className: 'rrf'},
      'J21': {key: 'J21', value: 0.082/0.140, expr: '= H14==0 ? 0 : H21/H14', readOnly: true, className: 'rrf'},
      'J22': {key: 'J22', value: '', expr: '= H14==0 ? 0 : H22/H14', readOnly: true, className: 'rrf'},
      'J23': {key: 'J23', value: '', expr: '= H14==0 ? 0 : H23/H14', readOnly: true, className: 'rrf'}, 
      'J24': {key: 'J24', value: '', expr: '= H14==0 ? 0 : H24/H14', readOnly: true, className: 'rrf'},
      'J25': {key: 'J25', value: '', expr: '= H14==0 ? 0 : H25/H14', readOnly: true, className: 'rrf'},
      'J26': {key: 'J26', value: '', expr: '= H14==0 ? 0 : H26/H14', readOnly: true, className: 'rrf'},
      'J27': {key: 'J27', value: '', expr: '= H14==0 ? 0 : H27/H14', readOnly: true, className: 'rrf'},
      'J28': {key: 'J28', value: '', expr: '= H14==0 ? 0 : H28/H14', readOnly: true, className: 'rrf'},
      'J29': {key: 'J29', value: '', expr: '= H14==0 ? 0 : H29/H14', readOnly: true, className: 'rrf'},
      'J30': {key: 'J30', value: '', expr: '= H14==0 ? 0 : H30/H14', readOnly: true, className: 'rrf'},
      'J31': {key: 'J31', value: '', expr: '= H14==0 ? 0 : H31/H14', readOnly: true, className: 'rrf'},
      'J32': {key: 'J32', value: '', expr: '', readOnly: true, className: 'rrf internal-standart'},
      'J33': {key: 'J33', value: ' ', expr: '', readOnly: true}, 
      'J34': {key: 'J34', value: ' ', expr: '', readOnly: true}, 
      'J35': {key: 'J35', value: ' ', expr: '', readOnly: true}, 
      'J36': {key: 'J36', value: ' ', expr: '', readOnly: true},
      'J37': {key: 'J37', value: ' ', expr: '', readOnly: true}, 
      'J38': {key: 'J38', value: '', expr: '', readOnly: true, className: ''},
      'J39': {key: 'J39', value: '', expr: '', readOnly: true, className: ''},
      'J40': {key: 'J40', value: '', expr: '', readOnly: true, className: ''},
      'J41': {key: 'J41', value: '', expr: '', readOnly: true, className: ''},

      'K2': {key: 'K2', value: 'RRF exp.', expr: '', readOnly: true, className: 'column-header rrf-checked'},
      'K3': {key: 'K3', value: '', expr: '', readOnly: true, className:'hidden-row rrf-checked'},
      'K4': {key: 'K4', value: 0.269/0.140, expr: '= I14==0 ? 0 : I4/I14', readOnly: true, className: 'rrf-checked'},
      'K5': {key: 'K5', value: '', expr: '= I14==0 ? 0 : I5/I14', readOnly: true,  className: 'rrf-checked'},
      'K6': {key: 'K6', value: '', expr: '= I14==0 ? 0 : I6/I14', readOnly: true, className: 'rrf-checked'},
      'K7': {key: 'K7', value: '', expr: '= I14==0 ? 0 : I7/I14', readOnly: true, className: 'rrf-checked'},
      'K8': {key: 'K8', value: '', expr: '= I14==0 ? 0 : I8/I14', readOnly: true, className: 'rrf-checked'},
      'K9': {key: 'K9', value: 0.188/0.140, expr: '= I14==0 ? 0 : I9/I14', readOnly: true, className: 'rrf-checked'},
      'K10': {key: 'K10', value: 0.139/0.140, expr: '= I14==0 ? 0 : I10/I14', readOnly: true, className: 'rrf-checked'},
      'K11': {key: 'K11', value: '', expr: '= I14==0 ? 0 : I11/I14', readOnly: true, className: 'rrf-checked'},
      'K12': {key: 'K12', value: 0.174/0.140, expr: '= I14==0 ? 0 : I12/I14', readOnly: true, className: 'rrf-checked'},
      'K13': {key: 'K13', value: 0.110/0.140, expr: '= I14==0 ? 0 : I13/I14', readOnly: true, className: 'rrf-checked'},
      'K14': {key: 'K14', value: 0.140/0.140, expr: '= I14==0 ? 0 : I14/I14', readOnly: true, className: 'rrf-checked ethanol'},
      'K15': {key: 'K15', value: '', expr: '= I14==0 ? 0 : I15/I14', readOnly: true, className: 'rrf-checked'},
      'K16': {key: 'K16', value: '', expr: '= I14==0 ? 0 : I16/I14', readOnly: true, className: 'rrf-checked'},
      'K17': {key: 'K17', value: 0.094/0.140, expr: '= I14==0 ? 0 : I17/I14', readOnly: true, className: 'rrf-checked'},
      'K18': {key: 'K18', value: 0.078/0.140, expr: '= I14==0 ? 0 : I18/I14', readOnly: true, className: 'rrf-checked'},
      'K19': {key: 'K19', value: '', expr: '= I14==0 ? 0 : I19/I14', readOnly: true, className: 'rrf-checked'},
      'K20': {key: 'K20', value: 0.085/0.140, expr: '= I14==0 ? 0 : I20/I14', readOnly: true, className: 'rrf-checked'},
      'K21': {key: 'K21', value: 0.079/0.140, expr: '= I14==0 ? 0 : I21/I14', readOnly: true, className: 'rrf-checked'},
      'K22': {key: 'K22', value: '', expr: '= I14==0 ? 0 : I22/I14', readOnly: true, className: 'rrf-checked'},
      'K23': {key: 'K23', value: '', expr: '= I14==0 ? 0 : I23/I14', readOnly: true, className: 'rrf-checked'}, 
      'K24': {key: 'K24', value: '', expr: '= I14==0 ? 0 : I24/I14', readOnly: true, className: 'rrf-checked'},
      'K25': {key: 'K25', value: '', expr: '= I14==0 ? 0 : I25/I14', readOnly: true, className: 'rrf-checked'},
      'K26': {key: 'K26', value: '', expr: '= I14==0 ? 0 : I26/I14', readOnly: true, className: 'rrf-checked'},
      'K27': {key: 'K27', value: '', expr: '= I14==0 ? 0 : I27/I14', readOnly: true, className: 'rrf-checked'},
      'K28': {key: 'K28', value: '', expr: '= I14==0 ? 0 : I28/I14', readOnly: true, className: 'rrf-checked'},
      'K29': {key: 'K29', value: '', expr: '= I14==0 ? 0 : I29/I14', readOnly: true, className: 'rrf-checked'},
      'K30': {key: 'K30', value: '', expr: '= I14==0 ? 0 : I30/I14', readOnly: true, className: 'rrf-checked'},
      'K31': {key: 'K31', value: '', expr: '= I14==0 ? 0 : I31/I14', readOnly: true, className: 'rrf-checked'},
      'K32': {key: 'K32', value: 0.075/0.140, expr: '= I14==0 ? 0 : I32/I14', readOnly: true, className: 'rrf-checked internal-standart'},
      'K33': {key: 'K33', value: ' ', expr: '', readOnly: true}, 
      'K34': {key: 'K34', value: ' ', expr: '', readOnly: true}, 
      'K35': {key: 'K35', value: ' ', expr: '', readOnly: true}, 
      'K36': {key: 'K36', value: ' ', expr: '', readOnly: true},
      'K37': {key: 'K37', value: ' ', expr: '', readOnly: true}, 
      'K38': {key: 'K38', value: '', expr: '', readOnly: true, className: ''},
      'K39': {key: 'K39', value: '', expr: '', readOnly: true, className: ''},
      'K40': {key: 'K40', value: '', expr: '', readOnly: true, className: ''},
      'K41': {key: 'K41', value: '', expr: '', readOnly: true, className: ''},
     
      'L2': {key: 'L2', value: 'RRF tab.', expr: '', readOnly: true, className: 'column-header'},
      'L3': {key: 'L3', value: '', expr: '', readOnly: true, className:'hidden-row'},
      'L4': {key: 'L4', value: 1.290, expr: '', readOnly: true, className: 'rrf-tab'},
      'L5': {key: 'L5', value: 1.410, expr: '', readOnly: true,  className: 'rrf-tab'},
      'L6': {key: 'L6', value: 1.030, expr: '', readOnly: true, className: 'rrf-tab'},
      'L7': {key: 'L7', value: 1.300, expr: '', readOnly: true, className: 'rrf-tab'},
      'L8': {key: 'L8', value: 1.166, expr: '', readOnly: true, className: 'rrf-tab'},
      'L9': {key: 'L9', value: 1.410, expr: '', readOnly: true, className: 'rrf-tab'},
      'L10': {key: 'L10', value: 1.030, expr: '', readOnly: true, className: 'rrf-tab'},
      'L11': {key: 'L11', value: 0.900, expr: '', readOnly: true, className: 'rrf-tab'},
      'L12': {key: 'L12', value: 1.280, expr: '', readOnly: true, className: 'rrf-tab'},
      'L13': {key: 'L13', value: 0.810, expr: '', readOnly: true, className: 'rrf-tab'},
      'L14': {key: 'L14', value: 1.000, expr: '', readOnly: true, className: 'rrf-tab  ethanol'},
      'L15': {key: 'L15', value: 2.019, expr: '', readOnly: true, className: 'rrf-tab'},
      'L16': {key: 'L16', value: 0.853, expr: '', readOnly: true, className: 'rrf-tab'},
      'L17': {key: 'L17', value: 0.690, expr: '', readOnly: true, className: 'rrf-tab'},
      'L18': {key: 'L18', value: 0.570, expr: '', readOnly: true, className: 'rrf-tab'},
      'L19': {key: 'L19', value: 0.707, expr: '', readOnly: true, className: 'rrf-tab'},
      'L20': {key: 'L20', value: 0.620, expr: '', readOnly: true, className: 'rrf-tab'},
      'L21': {key: 'L21', value: 0.570, expr: '', readOnly: true, className: 'rrf-tab'},
      'L22': {key: 'L22', value: 0.890, expr: '', readOnly: true, className: 'rrf-tab'},
      'L23': {key: 'L23', value: 0.600, expr: '', readOnly: true, className: 'rrf-tab'}, 
      'L24': {key: 'L24', value: 1.908, expr: '', readOnly: true, className: 'rrf-tab'},
      'L25': {key: 'L25', value: 0.700, expr: '', readOnly: true, className: 'rrf-tab'},
      'L26': {key: 'L26', value: 0.850, expr: '', readOnly: true, className: 'rrf-tab'},
      'L27': {key: 'L27', value: 0.679, expr: '',className: 'rrf-tab user-input-rrf'},
      'L28': {key: 'L28', value: 0.627, expr: '', className: 'rrf-tab user-input-rrf'},
      'L29': {key: 'L29', value: 0.618, expr: '', className: 'rrf-tab user-input-rrf'},
      'L30': {key: 'L30', value: 0.715, expr: '', className: 'rrf-tab user-input-rrf'},
      'L31': {key: 'L31', value: 0.559, expr: '', className: 'rrf-tab user-input-rrf'},
      'L32': {key: 'L32', value: '', expr: '', readOnly: true, className: 'rrf-tab internal-standart'},
      'L33': {key: 'L33', value: ' ', expr: '', readOnly: true}, 
      'L34': {key: 'L34', value: ' ', expr: '', readOnly: true}, 
      'L35': {key: 'L35', value: ' ', expr: '', readOnly: true}, 
      'L36': {key: 'L36', value: ' ', expr: '', readOnly: true},
      'L37': {key: 'L37', value: ' ', expr: '', readOnly: true},    
      'L38': {key: 'L38', value: '', expr: '', readOnly: true, className: ''},
      'L39': {key: 'L39', value: '', expr: '', readOnly: true, className: ''},
      'L40': {key: 'L40', value: '', expr: '', readOnly: true, className: ''},
      'L41': {key: 'L41', value: '', expr: '', readOnly: true, className: ''},
     
      'M1': {key: 'M1', value: 'Traditional IS', expr: '', colSpan: 5, readOnly: true, className:'group-header'},
      'M2': {key: 'M2', value: 'RF', expr: '', readOnly: true, className: 'column-header'},
      'M3': {key: 'M3', value: '', expr: '', readOnly: true, className:'hidden-row'},
      'M4': {key: 'M4', value: '0', expr: '', readOnly: true, className: 'rf-IS-void'},
      'M5': {key: 'M5', value: '0', expr: '', readOnly: true,  className: 'rf-IS-void'},
      'M6': {key: 'M6', value: '0', expr: '', readOnly: true, className: 'rf-IS-void'},
      'M7': {key: 'M7', value: '0', expr: '', readOnly: true, className: 'rf-IS-void'},
      'M8': {key: 'M8', value: '0', expr: '', readOnly: true, className: 'rf-IS-void'},
      'M9': {key: 'M9', value: '0', expr: '', readOnly: true, className: 'rf-IS-void'},
      'M10': {key: 'M10', value: '0', expr: '', readOnly: true, className: 'rf-IS-void'},
      'M11': {key: 'M11', value: '0', expr: '', readOnly: true, className: 'rf-IS-void'},
      'M12': {key: 'M12', value: '0', expr: '', readOnly: true, className: 'rf-IS-void'},
      'M13': {key: 'M13', value: '0', expr: '', readOnly: true, className: 'rf-IS-void'},
      'M14': {key: 'M14', value: '0', expr: '', readOnly: true, className: 'rf-IS-void  ethanol'},
      'M15': {key: 'M15', value: '0', expr: '', readOnly: true, className: 'rf-IS-void'},
      'M16': {key: 'M16', value: '0', expr: '', readOnly: true, className: 'rf-IS-void'},
      'M17': {key: 'M17', value: '0', expr: '', readOnly: true, className: 'rf-IS-void'},
      'M18': {key: 'M18', value: '0', expr: '', readOnly: true, className: 'rf-IS-void'},
      'M19': {key: 'M19', value: '0', expr: '', readOnly: true, className: 'rf-IS-void'},
      'M20': {key: 'M20', value: '0', expr: '', readOnly: true, className: 'rf-IS-void'},
      'M21': {key: 'M21', value: '0', expr: '', readOnly: true, className: 'rf-IS-void'},
      'M22': {key: 'M22', value: '0', expr: '', readOnly: true, className: 'rf-IS-void'},
      'M23': {key: 'M23', value: '0', expr: '', readOnly: true, className: 'rf-IS-void'}, 
      'M24': {key: 'M24', value: '0', expr: '', readOnly: true, className: 'rf-IS-void'},
      'M25': {key: 'M25', value: '0', expr: '', readOnly: true, className: 'rf-IS-void'},
      'M26': {key: 'M26', value: '0', expr: '', readOnly: true, className: 'rf-IS-void'},
      'M27': {key: 'M27', value: '0', expr: '', readOnly: true, className: 'rf-IS-void'},
      'M28': {key: 'M28', value: '0', expr: '', readOnly: true, className: 'rf-IS-void'},
      'M29': {key: 'M29', value: '0', expr: '', readOnly: true, className: 'rf-IS-void'},
      'M30': {key: 'M30', value: '0', expr: '', readOnly: true, className: 'rf-IS-void'},
      'M31': {key: 'M31', value: '0', expr: '', readOnly: true, className: 'rf-IS-void'},
      'M32': {key: 'M32', value: '0', expr: '', readOnly: true, className: 'rf-IS-void internal-standart'},
      'M33': {key: 'M33', value: ' ', expr: '', readOnly: true}, 
      'M34': {key: 'M34', value: ' ', expr: '', readOnly: true}, 
      'M35': {key: 'M35', value: ' ', expr: '', readOnly: true}, 
      'M36': {key: 'M36', value: ' ', expr: '', readOnly: true},
      'M37': {key: 'M37', value: ' ', expr: '', readOnly: true}, 
      'M38': {key: 'M38', value: '', expr: '', readOnly: true, className: ''},
      'M39': {key: 'M39', value: '', expr: '', readOnly: true, className: ''},
      'M40': {key: 'M40', value: '', expr: '', readOnly: true, className: ''},
      'M41': {key: 'M41', value: '', expr: '', readOnly: true, className: ''},
    
   
      
      'N2': {key: 'N2', value: 'RF', expr: '', readOnly: true, className: 'column-header'},
      'N3': {key: 'N3', value: '', expr: '', readOnly: true, className:'hidden-row'},
      'N4': {key: 'N4', value: 140.898/1241.600, expr: '= F4==0 ? 0 : C4/F4',  readOnly: true, className: 'rf-IS'},
      'N5': {key: 'N5', value: '', expr: '= F5==0 ? 0 : C5/F5', readOnly: true,  className: 'rf-IS'},
      'N6': {key: 'N6', value: '', expr: '= F6==0 ? 0 : C6/F6', readOnly: true, className: 'rf-IS'},
      'N7': {key: 'N7', value: '', expr: '= F7==0 ? 0 : C7/F7', readOnly: true, className: 'rf-IS'},
      'N8': {key: 'N8', value: '', expr: '= F8==0 ? 0 : C8/F8', readOnly: true, className: 'rf-IS'},
      'N9': {key: 'N9', value: 207.021/2603.537, expr: '= F9==0 ? 0 : C9/F9', readOnly: true, className: 'rf-IS'},
      'N10': {key: 'N10', value: 200.334/3424.161, expr: '= F10==0 ? 0 : C10/F10', readOnly: true, className: 'rf-IS'},
      'N11': {key: 'N11', value: '', expr: '= F11==0 ? 0 : C11/F11', readOnly: true, className: 'rf-IS'},
      'N12': {key: 'N12', value: 226.220/3078.696, expr: '= F12==0 ? 0 : C12/F12', readOnly: true, className: 'rf-IS'},
      'N13': {key: 'N13', value: 220.823/4741.121, expr: '= F13==0 ? 0 : C13/F13', readOnly: true, className: 'rf-IS'},
      'N14': {key: 'N14', value: 0/5637986.688, expr: '= F14==0 ? 0 : C14/F14', readOnly: true, className: 'rf-IS  ethanol'},
      'N15': {key: 'N15', value: '', expr: '= F15==0 ? 0 : C15/F15', readOnly: true, className: 'rf-IS'},
      'N16': {key: 'N16', value: '', expr: '= F16==0 ? 0 : C16/F16', readOnly: true, className: 'rf-IS'},
      'N17': {key: 'N17', value: 229.855/5780.953, expr: '= F17==0 ? 0 : C17/F17', readOnly: true, className: 'rf-IS'},
      'N18': {key: 'N18', value: 229.973/6983.557, expr: '= F18==0 ? 0 : C18/F18', readOnly: true, className: 'rf-IS'},
      'N19': {key: 'N19', value: '', expr: '= F19==0 ? 0 : C19/F19', readOnly: true, className: 'rf-IS'},
      'N20': {key: 'N20', value: 223.727/6211.560, expr: '= F20==0 ? 0 : C20/F20', readOnly: true, className: 'rf-IS'},
      'N21': {key: 'N21', value: 228.957/6901.088, expr: '= F21==0 ? 0 : C21/F21', readOnly: true, className: 'rf-IS'},
      'N22': {key: 'N22', value: '', expr: '= F22==0 ? 0 : C22/F22', readOnly: true, className: 'rf-IS'},
      'N23': {key: 'N23', value: '', expr: '= F23==0 ? 0 : C23/F23', readOnly: true, className: 'rf-IS'}, 
      'N24': {key: 'N24', value: '', expr: '= F24==0 ? 0 : C24/F24', readOnly: true, className: 'rf-IS'},
      'N25': {key: 'N25', value: '', expr: '= F25==0 ? 0 : C25/F2', readOnly: true, className: 'rf-IS'},
      'N26': {key: 'N26', value: '', expr: '= F26==0 ? 0 : C26/F26', readOnly: true, className: 'rf-IS'},
      'N27': {key: 'N27', value: '', expr: '= F27==0 ? 0 : C27/F27', readOnly: true, className: 'rf-IS'},
      'N28': {key: 'N28', value: '', expr: '= F28==0 ? 0 : C28/F28', readOnly: true, className: 'rf-IS'},
      'N29': {key: 'N29', value: '', expr: '= F29==0 ? 0 : C29/F29', readOnly: true, className: 'rf-IS'},
      'N30': {key: 'N30', value: '', expr: '= F30==0 ? 0 : C30/F30', readOnly: true, className: 'rf-IS'},
      'N31': {key: 'N31', value: '', expr: '= F31==0 ? 0 : C31/F31', readOnly: true, className: 'rf-IS'},
      'N32': {key: 'N32', value: 26.860/853.615, expr: '= F32==0 ? 0 : C32/F32', readOnly: true, className: 'rf-IS internal-standart'},
      'N33': {key: 'N33', value: ' ', expr: '', readOnly: true}, 
      'N34': {key: 'N34', value: ' ', expr: '', readOnly: true}, 
      'N35': {key: 'N35', value: ' ', expr: '', readOnly: true}, 
      'N36': {key: 'N36', value: ' ', expr: '', readOnly: true},
      'N37': {key: 'N37', value: ' ', expr: '', readOnly: true}, 
      'N38': {key: 'N38', value: '', expr: '', readOnly: true, className: ''},
      'N39': {key: 'N39', value: '', expr: '', readOnly: true, className: ''},
      'N40': {key: 'N40', value: '', expr: '', readOnly: true, className: ''},
      'N41': {key: 'N41', value: '', expr: '', readOnly: true, className: ''},

     
    


      'O2': {key: 'O2', value: 'RRF exp.', expr: '', readOnly: true, className: 'column-header'},
      'O3': {key: 'O3', value: '', expr: '', readOnly: true, className:'hidden-row'},
      'O4': {key: 'O4', value: '0', expr: '', readOnly: true, className: 'rrf-IS-void'},
      'O5': {key: 'O5', value: '0', expr: '', readOnly: true,  className: 'rrf-IS-void'},
      'O6': {key: 'O6', value: '0', expr: '', readOnly: true, className: 'rrf-IS-void'},
      'O7': {key: 'O7', value: '0', expr: '', readOnly: true, className: 'rrf-IS-void'},
      'O8': {key: 'O8', value: '0', expr: '', readOnly: true, className: 'rrf-IS-void'},
      'O9': {key: 'O9', value: '0', expr: '', readOnly: true, className: 'rrf-IS-void'},
      'O10': {key: 'O10', value: '0', expr: '', readOnly: true, className: 'rrf-IS-void'},
      'O11': {key: 'O11', value: '0', expr: '', readOnly: true, className: 'rrf-IS-void'},
      'O12': {key: 'O12', value: '0', expr: '', readOnly: true, className: 'rrf-IS-void'},
      'O13': {key: 'O13', value: '0', expr: '', readOnly: true, className: 'rrf-IS-void'},
      'O14': {key: 'O14', value: '0', expr: '', readOnly: true, className: 'rrf-IS-void ethanol'},
      'O15': {key: 'O15', value: '0', expr: '', readOnly: true, className: 'rrf-IS-void'},
      'O16': {key: 'O16', value: '0', expr: '', readOnly: true, className: 'rrf-IS-void'},
      'O17': {key: 'O17', value: '0', expr: '', readOnly: true, className: 'rrf-IS-void'},
      'O18': {key: 'O18', value: '0', expr: '', readOnly: true, className: 'rrf-IS-void'},
      'O19': {key: 'O19', value: '0', expr: '', readOnly: true, className: 'rrf-IS-void'},
      'O20': {key: 'O20', value: '0', expr: '', readOnly: true, className: 'rrf-IS-void'},
      'O21': {key: 'O21', value: '0', expr: '', readOnly: true, className: 'rrf-IS-void'},
      'O22': {key: 'O22', value: '0', expr: '', readOnly: true, className: 'rrf-IS-void'},
      'O23': {key: 'O23', value: '0', expr: '', readOnly: true, className: 'rrf-IS-void'}, 
      'O24': {key: 'O24', value: '0', expr: '', readOnly: true, className: 'rrf-IS-void'},
      'O25': {key: 'O25', value: '0', expr: '', readOnly: true, className: 'rrf-IS-void'},
      'O26': {key: 'O26', value: '0', expr: '', readOnly: true, className: 'rrf-IS-void'},
      'O27': {key: 'O27', value: '0', expr: '', readOnly: true, className: 'rrf-IS-void'},
      'O28': {key: 'O28', value: '0', expr: '', readOnly: true, className: 'rrf-IS-void'},
      'O29': {key: 'O29', value: '0', expr: '', readOnly: true, className: 'rrf-IS-void'},
      'O30': {key: 'O30', value: '0', expr: '', readOnly: true, className: 'rrf-IS-void'},
      'O31': {key: 'O31', value: '0', expr: '', readOnly: true, className: 'rrf-IS-void'},
      'O32': {key: 'O32', value: '0', expr: '', readOnly: true, className: 'rrf-IS-void internal-standart'},
      'O33': {key: 'O33', value: ' ', expr: '', readOnly: true}, 
      'O34': {key: 'O34', value: ' ', expr: '', readOnly: true}, 
      'O35': {key: 'O35', value: ' ', expr: '', readOnly: true}, 
      'O36': {key: 'O36', value: ' ', expr: '', readOnly: true},
      'O37': {key: 'O37', value: ' ', expr: '', readOnly: true}, 
      'O38': {key: 'O38', value: '', expr: '', readOnly: true, className: ''},
      'O39': {key: 'O39', value: '', expr: '', readOnly: true, className: ''},
      'O40': {key: 'O40', value: '', expr: '', readOnly: true, className: ''},
      'O41': {key: 'O41', value: '', expr: '', readOnly: true, className: ''},
    
     
      'P2': {key: 'P2', value: 'RRF exp.', expr: '', readOnly: true, className: 'column-header'},
      'P3': {key: 'P3', value: '', expr: '', readOnly: true, className:'hidden-row'},
      'P4': {key: 'P4', value: '0', expr: '', readOnly: true, className: 'rrf-IS-null'},
      'P5': {key: 'P5', value: '0', expr: '', readOnly: true,  className: 'rrf-IS-null'},
      'P6': {key: 'P6', value: '0', expr: '', readOnly: true, className: 'rrf-IS-null'},
      'P7': {key: 'P7', value: '0', expr: '', readOnly: true, className: 'rrf-IS-null'},
      'P8': {key: 'P8', value: '0', expr: '', readOnly: true, className: 'rrf-IS-null'},
      'P9': {key: 'P9', value: '0', expr: '', readOnly: true, className: 'rrf-IS-null'},
      'P10': {key: 'P10', value: '0', expr: '', readOnly: true, className: 'rrf-IS-null'},
      'P11': {key: 'P11', value: '0', expr: '', readOnly: true, className: 'rrf-IS-null'},
      'P12': {key: 'P12', value: '0', expr: '', readOnly: true, className: 'rrf-IS-null'},
      'P13': {key: 'P13', value: '0', expr: '', readOnly: true, className: 'rrf-IS-null'},
      'P14': {key: 'P14', value: '0', expr: '', readOnly: true, className: 'rrf-IS-null ethanol'},
      'P15': {key: 'P15', value: '0', expr: '', readOnly: true, className: 'rrf-IS-null'},
      'P16': {key: 'P16', value: '0', expr: '', readOnly: true, className: 'rrf-IS-null'},
      'P17': {key: 'P17', value: '0', expr: '', readOnly: true, className: 'rrf-IS-null'},
      'P18': {key: 'P18', value: '0', expr: '', readOnly: true, className: 'rrf-IS-null'},
      'P19': {key: 'P19', value: '0', expr: '', readOnly: true, className: 'rrf-IS-null'},
      'P20': {key: 'P20', value: '0', expr: '', readOnly: true, className: 'rrf-IS-null'},
      'P21': {key: 'P21', value: '0', expr: '', readOnly: true, className: 'rrf-IS-null'},
      'P22': {key: 'P22', value: '0', expr: '', readOnly: true, className: 'rrf-IS-null'},
      'P23': {key: 'P23', value: '0', expr: '', readOnly: true, className: 'rrf-IS-null'}, 
      'P24': {key: 'P24', value: '0', expr: '', readOnly: true, className: 'rrf-IS-null'},
      'P25': {key: 'P25', value: '0', expr: '', readOnly: true, className: 'rrf-IS-null'},
      'P26': {key: 'P26', value: '0', expr: '', readOnly: true, className: 'rrf-IS-null'},
      'P27': {key: 'P27', value: '0', expr: '', readOnly: true, className: 'rrf-IS-null'},
      'P28': {key: 'P28', value: '0', expr: '', readOnly: true, className: 'rrf-IS-null'},
      'P29': {key: 'P29', value: '0', expr: '', readOnly: true, className: 'rrf-IS-null'},
      'P30': {key: 'P30', value: '0', expr: '', readOnly: true, className: 'rrf-IS-null'},
      'P31': {key: 'P31', value: '0', expr: '', readOnly: true, className: 'rrf-IS-null'},
      'P32': {key: 'P32', value: '0', expr: '', readOnly: true, className: 'rrf-IS-null internal-standart'},
      'P33': {key: 'P33', value: ' ', expr: '', readOnly: true}, 
      'P34': {key: 'P34', value: ' ', expr: '', readOnly: true}, 
      'P35': {key: 'P35', value: ' ', expr: '', readOnly: true}, 
      'P36': {key: 'P36', value: ' ', expr: '', readOnly: true},
      'P37': {key: 'P37', value: ' ', expr: '', readOnly: true},     
      'P38': {key: 'P38', value: '', expr: '', readOnly: true, className: ''},
      'P39': {key: 'P39', value: '', expr: '', readOnly: true, className: ''},
      'P40': {key: 'P40', value: '', expr: '', readOnly: true, className: ''},
      'P41': {key: 'P41', value: '', expr: '', readOnly: true, className: ''},
    
      
      'Q2': {key: 'Q2', value: 'RRF exp.', expr: '', readOnly: true, className: 'column-header'},
      'Q3': {key: 'Q3', value: '', expr: '', readOnly: true, className:'hidden-row'},
      'Q4': {key: 'Q4', value: 0.113/0.0310, expr: '= N32==0 ? 0 : N4/N32', readOnly: true, className: 'rrf-IS'},
      'Q5': {key: 'Q5', value: '', expr: '= N32==0 ? 0 : N5/N32', readOnly: true,  className: 'rrf-IS'},
      'Q6': {key: 'Q6', value: '', expr: '= N32==0 ? 0 : N6/N32', readOnly: true, className: 'rrf-IS'},
      'Q7': {key: 'Q7', value: '', expr: '= N32==0 ? 0 : N7/N32', readOnly: true, className: 'rrf-IS'},
      'Q8': {key: 'Q8', value: '', expr: '= N32==0 ? 0 : N8/N32', readOnly: true, className: 'rrf-IS'},
      'Q9': {key: 'Q9', value: 0.080/0.031, expr: '= N32==0 ? 0 : N9/N32', readOnly: true, className: 'rrf-IS'},
      'Q10': {key: 'Q10', value: 0.059/0.031, expr: '= N32==0 ? 0 : N10/N32', readOnly: true, className: 'rrf-IS'},
      'Q11': {key: 'Q11', value: '', expr: '= N32==0 ? 0 : N11/N32', readOnly: true, className: 'rrf-IS'},
      'Q12': {key: 'Q12', value: 0.073/0.031, expr: '= N32==0 ? 0 : N12/N32', readOnly: true, className: 'rrf-IS'},
      'Q13': {key: 'Q13', value: 0.047/0.031, expr: '= N32==0 ? 0 : N13/N32', readOnly: true, className: 'rrf-IS'},
      'Q14': {key: 'Q14', value: 0/0.031, expr: '= N32==0 ? 0 : N14/N32', readOnly: true, className: 'rrf-IS ethanol'},
      'Q15': {key: 'Q15', value: '', expr: '= N32==0 ? 0 : N15/N32', readOnly: true, className: 'rrf-IS'},
      'Q16': {key: 'Q16', value: '', expr: '= N32==0 ? 0 : N16/N32', readOnly: true, className: 'rrf-IS'},
      'Q17': {key: 'Q17', value: 0.040/0.031, expr: '= N32==0 ? 0 : N17/N32', readOnly: true, className: 'rrf-IS'},
      'Q18': {key: 'Q18', value: 0.033/0.031, expr: '= N32==0 ? 0 : N18/N32', readOnly: true, className: 'rrf-IS'},
      'Q19': {key: 'Q19', value: '', expr: '= N32==0 ? 0 : N19/N32', readOnly: true, className: 'rrf-IS'},
      'Q20': {key: 'Q20', value: 0.036/0.031, expr: '= N32==0 ? 0 : N20/N32', readOnly: true, className: 'rrf-IS'},
      'Q21': {key: 'Q21', value: 0.033/0.031, expr: '= N32==0 ? 0 : N21/N32', readOnly: true, className: 'rrf-IS'},
      'Q22': {key: 'Q22', value: '', expr: '= N32==0 ? 0 : N22/N32', readOnly: true, className: 'rrf-IS'},
      'Q23': {key: 'Q23', value: '', expr: '= N32==0 ? 0 : N23/N32', readOnly: true, className: 'rrf-IS'}, 
      'Q24': {key: 'Q24', value: '', expr: '= N32==0 ? 0 : N24/N32', readOnly: true, className: 'rrf-IS'},
      'Q25': {key: 'Q25', value: '', expr: '= N32==0 ? 0 : N25/N32', readOnly: true, className: 'rrf-IS'},
      'Q26': {key: 'Q26', value: '', expr: '= N32==0 ? 0 : N26/N32', readOnly: true, className: 'rrf-IS'},
      'Q27': {key: 'Q27', value: '', expr: '= N32==0 ? 0 : N27/N32', readOnly: true, className: 'rrf-IS'},
      'Q28': {key: 'Q28', value: '', expr: '= N32==0 ? 0 : N28/N32', readOnly: true, className: 'rrf-IS'},
      'Q29': {key: 'Q29', value: '', expr: '= N32==0 ? 0 : N29/N32', readOnly: true, className: 'rrf-IS'},
      'Q30': {key: 'Q30', value: '', expr: '= N32==0 ? 0 : N30/N32', readOnly: true, className: 'rrf-IS'},
      'Q31': {key: 'Q31', value: '', expr: '= N32==0 ? 0 : N31/N32', readOnly: true, className: 'rrf-IS'},
      /* Additional fields */
      'Q32': {key: 'Q32', value: 0.031/0.031, expr: '=N32/N32', readOnly: true, className: 'rrf-IS internal-standart'},
      'Q33': {key: 'Q33', value: 'M (sample), g', expr:'', readOnly: true, className: 'additional-header'},
      'Q34': {key: 'Q34', value: 'M (IS), g', expr:'', readOnly: true, className: 'additional-header'},
      'Q35': {key: 'Q35', value: 'IS conc., mg/kg', expr:'', readOnly: true, className: 'additional-header'},
      'Q36': {key: 'Q36', value: 'Density, mg/L', expr:'', readOnly: true, className: 'additional-header'},
      'Q37': {key: 'Q37', value: 'Temperature, °C', expr:'', readOnly: true, className: 'additional-header'},
      'Q38': {key: 'Q38', value: 'ABV, (%)', expr: '', readOnly: true, className: 'additional-header'},
      'Q39': {key: 'Q39', value: '', expr: '', readOnly: true, className: ''},
      'Q40': {key: 'Q40', value: '', expr: '', readOnly: true, className: ''},
      'Q41': {key: 'Q41', value: '', expr: '', readOnly: true, className: ''},
    
      'R1': {key: 'R1', value: 'ANALYZED SAMPLE:', expr: '', colSpan: 3, readOnly: true, className:'group-header'},
      'R2': {key: 'R2', value: 'Response  (pure sample)', expr: '', readOnly: true, className:'column-header-eth'},
      'R3': {key: 'R3', value: '', expr: '', className:'hidden-row'},
      'R4': {key: 'R4', value: '121.688', expr: '', className: 'response pure-sample user-input'},
      'R5': {key: 'R5', value: '0', expr: '', className: 'response pure-sample user-input'},
      'R6': {key: 'R6', value: '0', expr: '', className: 'response pure-sample user-input'},
      'R7': {key: 'R7', value: '0', expr: '', className: 'response pure-sample user-input'},
      'R8': {key: 'R8', value: '0', expr: '', className: 'response pure-sample user-input'},
      'R9': {key: 'R9', value: '170.247', expr: '', className: 'response pure-sample user-input'},
      'R10': {key: 'R10', value: '102.2406', expr: '', className: 'response pure-sample user-input'},
      'R11': {key: 'R11', value: '0', expr: '', className: 'response pure-sample user-input'},
      'R12': {key: 'R12', value: '350.0796', expr: '', className: 'response pure-sample user-input'},
      'R13': {key: 'R13', value: '443.135', expr: '', className: 'response pure-sample user-input'},
      'R14': {key: 'R14', value: '7013036.8', expr: '', className: 'response pure-sample user-input ethanol'},
      'R15': {key: 'R15', value: '0', expr: '', className: 'response pure-sample user-input'},
      'R16': {key: 'R16', value: '0', expr: '', className: 'response pure-sample user-input'},
      'R17': {key: 'R17', value: '3549.6054', expr: '', className: 'response pure-sample user-input'},
      'R18': {key: 'R18', value: '18013.562', expr: '', className: 'response pure-sample user-input'},
      'R19': {key: 'R19', value: '0', expr: '', className: 'response pure-sample user-input'},
      'R20': {key: 'R20', value: '113.754', expr: '', className: 'response pure-sample user-input'},
      'R21': {key: 'R21', value: '59923.2733', expr: '', className: 'response pure-sample user-input'},
      'R22': {key: 'R22', value: '0', expr: '', className: 'response pure-sample user-input'},
      'R23': {key: 'R23', value: '0', expr: '', className: 'response pure-sample user-input'},
      'R24': {key: 'R24', value: '0', expr: '', className: 'response pure-sample user-input'},
      'R25': {key: 'R25', value: '0', expr: '', className: 'response pure-sample user-input'},
      'R26': {key: 'R26', value: '0', expr: '', className: 'response pure-sample user-input'},
      'R27': {key: 'R27', value: '0', expr: '', className: 'response pure-sample user-input'},
      'R28': {key: 'R28', value: '0', expr: '', className: 'response pure-sample user-input'},
      'R29': {key: 'R29', value: '0', expr: '', className: 'response pure-sample user-input'},
      'R30': {key: 'R30', value: '0', expr: '', className: 'response pure-sample user-input'},
      'R31': {key: 'R31', value: '0', expr: '', className: 'response pure-sample user-input'},
      'R32': {key: 'R32', value: '0', expr: '', readOnly: true, className: 'response pure-sample user-input internal-standart'},
      /* Additional fields */
      'R33': {key: 'R33', value: '8.755', expr:'', className: 'additional-header'},
      'R34': {key: 'R34', value: '0.896', expr:'', className: 'additional-header'},
      'R35': {key: 'R35', value: '497.38', expr:'', className: 'additional-header'},
      'R36': {key: 'R36', value: '948060', expr:'', className: 'additional-header'},
      /*VALIDATE VALUES EXCEPT FROM -25 TO +40 AND ADD BAN NOTE TO USER */
      'R37': {key: 'R37', value: '20', expr:'', className: 'additional-header'},
      'R38': {key: 'R38', value: '40', expr: '',className: 'additional-header'},
      'R39': {key: 'R39', value: '', expr: '', readOnly: true, className: ''},
      'R40': {key: 'R40', value: '', expr: '', readOnly: true, className: ''},
      'R41': {key: 'R41', value: '', expr: '', readOnly: true, className: ''},
    
     
      'S2': {key: 'S2', value: 'Response  (sample + IS)', expr: '', readOnly: true, className:'column-header-IS'},
      'S3': {key: 'S3', value: '', expr: '', className:'hidden-row'},
      'S4': {key: 'S4', value: '112.806', expr: '', className: 'response pure-sample-IS user-input'},
      'S5': {key: 'S5', value: '0', expr: '', className: 'response pure-sample-IS user-input'},
      'S6': {key: 'S6', value: '0', expr: '', className: 'response pure-sample-IS user-input'},
      'S7': {key: 'S7', value: '0', expr: '', className: 'response pure-sample-IS user-input'},
      'S8': {key: 'S8', value: '0', expr: '', className: 'response pure-sample-IS user-input'},
      'S9': {key: 'S9', value: '154.770', expr: '', className: 'response pure-sample-IS user-input'},
      'S10': {key: 'S10', value: '92.946', expr: '', className: 'response pure-sample-IS user-input'},
      'S11': {key: 'S11', value: '0', expr: '', className: 'response pure-sample-IS user-input'},
      'S12': {key: 'S12', value: '336.436', expr: '', className: 'response pure-sample-IS user-input'},
      'S13': {key: 'S13', value: '402.850', expr: '', className: 'response pure-sample-IS user-input'},
      'S14': {key: 'S14', value: '7014568', expr: '', className: 'response pure-sample-IS user-input ethanol'},
      'S15': {key: 'S15', value: '0', expr: '', className: 'response pure-sample-IS user-input'},
      'S16': {key: 'S16', value: '0', expr: '', className: 'response pure-sample-IS user-input'},
      'S17': {key: 'S17', value: '3226.914', expr: '', className: 'response pure-sample-IS user-input'},
      'S18': {key: 'S18', value: '16421.420', expr: '', className: 'response pure-sample-IS user-input'},
      'S19': {key: 'S19', value: '0', expr: '', className: 'response pure-sample-IS user-input'},
      'S20': {key: 'S20', value: '106.140', expr: '', className: 'response pure-sample-IS user-input'},
      'S21': {key: 'S21', value: '54475.703', expr: '', className: 'response pure-sample-IS user-input'},
      'S22': {key: 'S22', value: '0', expr: '', className: 'response pure-sample-IS user-input'},
      'S23': {key: 'S23', value: '0', expr: '', className: 'response pure-sample-IS user-input'},
      'S24': {key: 'S24', value: '0', expr: '', className: 'response pure-sample-IS user-input'},
      'S25': {key: 'S25', value: '0', expr: '', className: 'response pure-sample-IS user-input'},
      'S26': {key: 'S26', value: '0', expr: '', className: 'response pure-sample-IS user-input'},
      'S27': {key: 'S27', value: '0', expr: '', className: 'response pure-sample-IS user-input'},
      'S28': {key: 'S28', value: '0', expr: '', className: 'response pure-sample-IS user-input'},
      'S29': {key: 'S29', value: '0', expr: '', className: 'response pure-sample-IS user-input'},
      'S30': {key: 'S30', value: '0', expr: '', className: 'response pure-sample-IS user-input'},
      'S31': {key: 'S31', value: '0', expr: '', className: 'response pure-sample-IS user-input'},
      'S32': {key: 'S32', value: '1852.000', expr: '', className: 'response pure-sample-IS user-input internal-standart'},
      'S33': {key: 'S33', value: ' ', expr: '', readOnly: true}, 
      'S34': {key: 'S34', value: ' ', expr: '', readOnly: true}, 
      'S35': {key: 'S35', value: ' ', expr: '', readOnly: true}, 
      'S36': {key: 'S36', value: ' ', expr: '', readOnly: true},
      'S37': {key: 'S37', value: ' ', expr: '', readOnly: true},
      'S38': {key: 'S38', value: '', expr: '', readOnly: true, className: ''},
      'S39': {key: 'S39', value: '', expr: '', readOnly: true, className: ''},
      'S40': {key: 'S40', value: '', expr: '', readOnly: true, className: ''},
      'S41': {key: 'S41', value: '', expr: '', readOnly: true, className: ''},
    
      
      'T2': {key: 'T2', value: 'Concentration,  mg/L AA', expr: '', readOnly: true, className:'column-header c-mg-l-AN-SAMPLE-CHECKED'},
      'T3': {key: 'T3', value: '', expr: '', readOnly: true, className:'hidden-row c-mg-l-AN-SAMPLE-CHECKED'},
      'T4': {key: 'T4', value: 1.290*121.688*789300/7013036.800, expr: '= R14==0 ? 0 : 1.290*R4*789300/R14', readOnly: true, className: 'c-mg-l-AN-SAMPLE-CHECKED'},
      'T5': {key: 'T5', value: '', expr: '= R14==0 ? 0 : 1.410*R5*789300/R14', readOnly: true, className: 'c-mg-l-AN-SAMPLE-CHECKED'},
      'T6': {key: 'T6', value: '', expr: '= R14==0 ? 0 : 1.030*R6*789300/R14', readOnly: true, className: 'c-mg-l-AN-SAMPLE-CHECKED'},
      'T7': {key: 'T7', value: '', expr: '= R14==0 ? 0 : 1.300*R7*789300/R14', readOnly: true, className: 'c-mg-l-AN-SAMPLE-CHECKED'},
      'T8': {key: 'T8', value: '', expr: '= R14==0 ? 0 : 1.166*R8*789300/R14', readOnly: true, className: 'c-mg-l-AN-SAMPLE-CHECKED'},
      'T9': {key: 'T9', value: 1.410*170.247*789300/7013036.800, expr: '= R14==0 ? 0 : 1.410*R9*789300/R14', readOnly: true, className: 'c-mg-l-AN-SAMPLE-CHECKED'},
      'T10': {key: 'T10', value: 1.030*102.241*789300/7013036.800, expr: '= R14==0 ? 0 : 1.030*R10*789300/R14', readOnly: true, className: 'c-mg-l-AN-SAMPLE-CHECKED'},
      'T11': {key: 'T11', value: '', expr: '= R14==0 ? 0 : 0.900*R11*789300/R14', readOnly: true, className: 'c-mg-l-AN-SAMPLE-CHECKED'},
      'T12': {key: 'T12', value: 1.280*350.080*789300/7013036.800, expr: '= R14==0 ? 0 : 1.280*R12*789300/R14', readOnly: true, className: 'c-mg-l-AN-SAMPLE-CHECKED'},
      'T13': {key: 'T13', value: 0.810*443.135*789300/7013036.800, expr: '= R14==0 ? 0 : 0.810*R13*789300/R14', readOnly: true, className: 'c-mg-l-AN-SAMPLE-CHECKED'},
      'T14': {key: 'T14', value: '789300', expr: '', readOnly: true, className: 'c-mg-l-AN-SAMPLE-CHECKED ethanol'},
      'T15': {key: 'T15', value: '', expr: '= R14==0 ? 0 : 2.019*R15*789300/R14', readOnly: true, className: 'c-mg-l-AN-SAMPLE-CHECKED'},
      'T16': {key: 'T16', value: '', expr: '= R14==0 ? 0 : 0.853*R16*789300/R14', readOnly: true, className: 'c-mg-l-AN-SAMPLE-CHECKED'},
      'T17': {key: 'T17', value: 0.690*3549.605*789300/7013036.800, expr: '= R14==0 ? 0 : 0.690*R17*789300/R14', readOnly: true, className: 'c-mg-l-AN-SAMPLE-CHECKED'},
      'T18': {key: 'T18', value: 0.570*18013.562*789300/7013036.800, expr: '= R14==0 ? 0 : 0.570*R18*789300/R14', readOnly: true, className: 'c-mg-l-AN-SAMPLE-CHECKED'},
      'T19': {key: 'T19', value: '', expr: '= R14==0 ? 0 : 0.707*R19*789300/R14', readOnly: true, className: 'c-mg-l-AN-SAMPLE-CHECKED'},
      'T20': {key: 'T20', value: 0.620*113.754*789300/7013036.800, expr: '= R14==0 ? 0 : 0.620*R20*789300/R14', readOnly: true, className: 'c-mg-l-AN-SAMPLE-CHECKED'},
      'T21': {key: 'T21', value: 0.570*59923.273*789300/7013036.800, expr: '= R14==0 ? 0 : 0.570*R21*789300/R14', readOnly: true, className: 'c-mg-l-AN-SAMPLE-CHECKED'},
      'T22': {key: 'T22', value:'', expr: '= R14==0 ? 0 : 0.890*R22*789300/R14', readOnly: true, className: 'c-mg-l-AN-SAMPLE-CHECKED'},
      'T23': {key: 'T23', value: '', expr: '= R14==0 ? 0 : 0.600*R23*789300/R14', readOnly: true, className: 'c-mg-l-AN-SAMPLE-CHECKED'},
      'T24': {key: 'T24', value: '', expr: '= R14==0 ? 0 : 1.908*R24*789300/R14', readOnly: true, className: 'c-mg-l-AN-SAMPLE-CHECKED'},
      'T25': {key: 'T25', value: '', expr: '= R14==0 ? 0 : 0.700*R25*789300/R14', readOnly: true, className: 'c-mg-l-AN-SAMPLE-CHECKED'},
      'T26': {key: 'T26', value: '', expr: '= R14==0 ? 0 : 0.850*R26*789300/R14', readOnly: true, className: 'c-mg-l-AN-SAMPLE-CHECKED'},
      'T27': {key: 'T27', value: '', expr: '= R14==0 ? 0 : 0.679*R27*789300/R14', readOnly: true, className: 'c-mg-l-AN-SAMPLE-CHECKED'},
      'T28': {key: 'T28', value: '', expr: '= R14==0 ? 0 : 0.627*R28*789300/R14', readOnly: true, className: 'c-mg-l-AN-SAMPLE-CHECKED'},
      'T29': {key: 'T29', value: '', expr: '= R14==0 ? 0 : 0.618*R29*789300/R14', readOnly: true, className: 'c-mg-l-AN-SAMPLE-CHECKED'},
      'T30': {key: 'T30', value: '', expr: '= R14==0 ? 0 : 0.715*R30*789300/R14', readOnly: true, className: 'c-mg-l-AN-SAMPLE-CHECKED'},
      'T31': {key: 'T31', value: '', expr: '= R14==0 ? 0 : 0.559*R31*789300/R14', readOnly: true, className: 'c-mg-l-AN-SAMPLE-CHECKED'},
      'T32': {key: 'T32', value: '', expr: '', readOnly: true, className: 'c-mg-l-AN-SAMPLE-CHECKED internal-standart'},
      'T33': {key: 'T33', value: ' ', expr: '', readOnly: true}, 
      'T34': {key: 'T34', value: ' ', expr: '', readOnly: true}, 
      'T35': {key: 'T35', value: ' ', expr: '', readOnly: true}, 
      'T36': {key: 'T36', value: ' ', expr: '', readOnly: true},
      'T37': {key: 'T37', value: ' ', expr: '', readOnly: true},
      'T38': {key: 'T38', value: '', expr: '', readOnly: true, className: ''},
      'T39': {key: 'T39', value: '', expr: '', readOnly: true, className: ''},
      'T40': {key: 'T40', value: '', expr: '', readOnly: true, className: ''},
      'T41': {key: 'T41', value: '', expr: '', readOnly: true, className: ''},
    
     
      'U2': {key: 'U2', value: 'Concentration,  mg/L AA', expr: '', readOnly: true, className:'column-header c-mg-l-AN-SAMPLE-UNCHECKED'},
      'U3': {key: 'U3', value: '', expr: '', readOnly: true, className:'hidden-row c-mg-l-AN-SAMPLE-UNCHECKED'},
      'U4': {key: 'U4', value: 1.921*121.688*789300/7013036.800, expr: '=K4*R4*789300/R14', readOnly: true, className: 'c-mg-l-AN-SAMPLE-UNCHECKED'},
      'U5': {key: 'U5', value: '', expr: '= R14==0 ? 0 : K5*R5*789300/R14', readOnly: true, className: 'c-mg-l-AN-SAMPLE-UNCHECKED'},
      'U6': {key: 'U6', value: '', expr: '= R14==0 ? 0 : K6*R6*789300/R14', readOnly: true, className: 'c-mg-l-AN-SAMPLE-UNCHECKED'},
      'U7': {key: 'U7', value: '', expr: '= R14==0 ? 0 : K7*R7*789300/R14', readOnly: true, className: 'c-mg-l-AN-SAMPLE-UNCHECKED'},
      'U8': {key: 'U8', value: '', expr: '= R14==0 ? 0 : K8*R8*789300/R14', readOnly: true, className: 'c-mg-l-AN-SAMPLE-UNCHECKED'},
      'U9': {key: 'U9', value: 1.343*170.247*789300/7013036.800, expr: '= R14==0 ? 0 : K9*R9*789300/R14', readOnly: true, className: 'c-mg-l-AN-SAMPLE-UNCHECKED'},
      'U10': {key: 'U10', value: 0.993*102.241*789300/7013036.800, expr: '= R14==0 ? 0 : K10*R10*789300/R14', readOnly: true, className: 'c-mg-l-AN-SAMPLE-UNCHECKED'},
      'U11': {key: 'U11', value: '', expr: '= R14==0 ? 0 : K11*R11*789300/R14', readOnly: true, className: 'c-mg-l-AN-SAMPLE-UNCHECKED'},
      'U12': {key: 'U12', value: 1.243*350.080*789300/7013036.800, expr: '= R14==0 ? 0 : K12*R12*789300/R14', readOnly: true, className: 'c-mg-l-AN-SAMPLE-UNCHECKED'},
      'U13': {key: 'U13', value: 0.786*443.135*789300/7013036.800, expr: '= R14==0 ? 0 : K13*R13*789300/R14', readOnly: true, className: 'c-mg-l-AN-SAMPLE-UNCHECKED'},
      'U14': {key: 'U14', value: '789300', expr: '', readOnly: true, className: 'c-mg-l-AN-SAMPLE-UNCHECKED ethanol'},
      'U15': {key: 'U15', value: '', expr: '= R14==0 ? 0 : K15*R15*789300/R14', readOnly: true, className: 'c-mg-l-AN-SAMPLE-UNCHECKED'},
      'U16': {key: 'U16', value: '', expr: '= R14==0 ? 0 : K16*R16*789300/R14', readOnly: true, className: 'c-mg-l-AN-SAMPLE-UNCHECKED'},
      'U17': {key: 'U17', value: 0.671*3549.605*789300/7013036.800, expr: '= R14==0 ? 0 : K17*R17*789300/R14', readOnly: true, className: 'c-mg-l-AN-SAMPLE-UNCHECKED'},
      'U18': {key: 'U18', value: 0.557*18013.562*789300/7013036.800, expr: '= R14==0 ? 0 : K18*R18*789300/R14', readOnly: true, className: 'c-mg-l-AN-SAMPLE-UNCHECKED'},
      'U19': {key: 'U19', value: '', expr: '= R14==0 ? 0 : K19*R19*789300/R14', readOnly: true, className: 'c-mg-l-AN-SAMPLE-UNCHECKED'},
      'U20': {key: 'U20', value: 0.607*113.754*789300/7013036.800, expr: '= R14==0 ? 0 : K20*R20*789300/R14', readOnly: true, className: 'c-mg-l-AN-SAMPLE-UNCHECKED'},
      'U21': {key: 'U21', value: 0.564*59923.273*789300/7013036.800, expr: '= R14==0 ? 0 : K21*R21*789300/R14', readOnly: true, className: 'c-mg-l-AN-SAMPLE-UNCHECKED'},
      'U22': {key: 'U22', value: '', expr: '= R14==0 ? 0 : K22*R22*789300/R14', readOnly: true, className: 'c-mg-l-AN-SAMPLE-UNCHECKED'},
      'U23': {key: 'U23', value: '', expr: '= R14==0 ? 0 : K23*R23*789300/R14', readOnly: true, className: 'c-mg-l-AN-SAMPLE-UNCHECKED'},
      'U24': {key: 'U24', value: '', expr: '= R14==0 ? 0 : K24*R24*789300/R14', readOnly: true, className: 'c-mg-l-AN-SAMPLE-UNCHECKED'},
      'U25': {key: 'U25', value: '', expr: '= R14==0 ? 0 : K25*R25*789300/R14', readOnly: true, className: 'c-mg-l-AN-SAMPLE-UNCHECKED'},
      'U26': {key: 'U26', value: '', expr: '= R14==0 ? 0 : K26*R26*789300/R14', readOnly: true, className: 'c-mg-l-AN-SAMPLE-UNCHECKED'},
      'U27': {key: 'U27', value: '', expr: '= R14==0 ? 0 : K27*R27*789300/R14', readOnly: true, className: 'c-mg-l-AN-SAMPLE-UNCHECKED'},
      'U28': {key: 'U28', value: '', expr: '= R14==0 ? 0 : K28*R28*789300/R14', readOnly: true, className: 'c-mg-l-AN-SAMPLE-UNCHECKED'},
      'U29': {key: 'U29', value: '', expr: '= R14==0 ? 0 : K29*R29*789300/R14', readOnly: true, className: 'c-mg-l-AN-SAMPLE-UNCHECKED'},
      'U30': {key: 'U30', value: '', expr: '= R14==0 ? 0 : K30*R30*789300/R14', readOnly: true, className: 'c-mg-l-AN-SAMPLE-UNCHECKED'},
      'U31': {key: 'U31', value: '', expr: '= R14==0 ? 0 : K31*R31*789300/R14', readOnly: true, className: 'c-mg-l-AN-SAMPLE-UNCHECKED'},
      'U32': {key: 'U32', value: '', expr: '', readOnly: true, className: 'c-mg-l-AN-SAMPLE-UNCHECKED internal-standart'},
      'U33': {key: 'U33', value: '', expr: '', readOnly: true},
      'U34': {key: 'U34', value: '', expr: '', readOnly: true, className:''}, 
      'U35': {key: 'U35', value: '', expr: '', readOnly: true}, 
      'U36': {key: 'U36', value: '', expr: '', readOnly: true},
      'U37': {key: 'U37', value: '', expr: '', readOnly: true},
      'U38': {key: 'U38', value: '', expr: '', readOnly: true, className: ''},
      'U39': {key: 'U39', value: '', expr: '', readOnly: true, className: ''},
      'U40': {key: 'U40', value: '', expr: '', readOnly: true, className: ''},
      'U41': {key: 'U41', value: '', expr: '', readOnly: true, className: ''},
    
      'V1': {key: 'V1', value: 'Whiskey sample #4', expr: '', colSpan: 2, className:'group-header'},
      'V2': {key: 'V2', value: 'Concentration,  mg/L AA', expr: '', readOnly: true, className:'column-header c-mg-l-AN-SAMPLE-CHECKED-UNCHECKED'},
      'V3': {key: 'V3', value: '', expr: '', readOnly: true, className:'hidden-row c-mg-l-AN-SAMPLE-CHECKED-UNCHECKED'},
      'V4': {key: 'V4', value: 1.990*121.688*789300/7013036.800, expr: '=J4*R4*789300/R14', readOnly: true, className: 'c-mg-l-AN-SAMPLE-CHECKED-UNCHECKED'},
      'V5': {key: 'V5', value: '', expr: '= R14==0 ? 0 : J5*R5*789300/R14', readOnly: true, className: 'c-mg-l-AN-SAMPLE-CHECKED-UNCHECKED'},
      'V6': {key: 'V6', value: '', expr: '= R14==0 ? 0 : J6*R6*789300/R14', readOnly: true, className: 'c-mg-l-AN-SAMPLE-CHECKED-UNCHECKED'},
      'V7': {key: 'V7', value: '', expr: '= R14==0 ? 0 : J7*R7*789300/R14', readOnly: true, className: 'c-mg-l-AN-SAMPLE-CHECKED-UNCHECKED'},
      'V8': {key: 'V8', value: '', expr: '= R14==0 ? 0 : J8*R8*789300/R14', readOnly: true, className: 'c-mg-l-AN-SAMPLE-CHECKED-UNCHECKED'},
      'V9': {key: 'V9', value: 0.568*170.247*789300/7013036.800, expr: '= R14==0 ? 0 : J9*R9*789300/R14', readOnly: true, className: 'c-mg-l-AN-SAMPLE-CHECKED-UNCHECKED'},
      'V10': {key: 'V10', value: 0.749*102.241*789300/7013036.800, expr: '= R14==0 ? 0 : J10*R10*789300/R14', readOnly: true, className: 'c-mg-l-AN-SAMPLE-CHECKED-UNCHECKED'},
      'V11': {key: 'V11', value: '', expr: '= R14==0 ? 0 : J11*R11*789300/R14', readOnly: true, className: 'c-mg-l-AN-SAMPLE-CHECKED-UNCHECKED'},
      'V12': {key: 'V12', value: 0.645*350.080*789300/7013036.800, expr: '= R14==0 ? 0 : J12*R12*789300/R14', readOnly: true, className: 'c-mg-l-AN-SAMPLE-CHECKED-UNCHECKED'},
      'V13': {key: 'V13', value: 0.606*443.135*789300/7013036.800, expr: '= R14==0 ? 0 : J13*R13*789300/R14', readOnly: true, className: 'c-mg-l-AN-SAMPLE-CHECKED-UNCHECKED'},
      'V14': {key: 'V14', value: '789300', expr: '', readOnly: true, className: 'c-mg-l-AN-SAMPLE-CHECKED-UNCHECKED ethanol'},
      'V15': {key: 'V15', value: '', expr: '= R14==0 ? 0 : J15*R15*789300/R14', readOnly: true, className: 'c-mg-l-AN-SAMPLE-CHECKED-UNCHECKED'},
      'V16': {key: 'V16', value: '', expr: '= R14==0 ? 0 : J16*R16*789300/R14', readOnly: true, className: 'c-mg-l-AN-SAMPLE-CHECKED-UNCHECKED'},
      'V17': {key: 'V17', value: 0.645*3549.605*789300/7013036.800, expr: '= R14==0 ? 0 : J17*R17*789300/R14', readOnly: true, className: 'c-mg-l-AN-SAMPLE-CHECKED-UNCHECKED'},
      'V18': {key: 'V18', value: 0.606*18013.562*789300/7013036.800, expr: '= R14==0 ? 0 : J18*R18*789300/R14', readOnly: true, className: 'c-mg-l-AN-SAMPLE-CHECKED-UNCHECKED'},
      'V19': {key: 'V19', value: '', expr: '= R14==0 ? 0 : J19*R19*789300/R14', readOnly: true, className: 'c-mg-l-AN-SAMPLE-CHECKED-UNCHECKED'},
      'V20': {key: 'V20', value: 0.598*113.754*789300/7013036.800, expr: '= R14==0 ? 0 : J20*R20*789300/R14', readOnly: true, className: 'c-mg-l-AN-SAMPLE-CHECKED-UNCHECKED'},
      'V21': {key: 'V21', value: 0.584*59923.273*789300/7013036.800, expr: '= R14==0 ? 0 : J21*R21*789300/R14', readOnly: true, className: 'c-mg-l-AN-SAMPLE-CHECKED-UNCHECKED'},
      'V22': {key: 'V22', value: '', expr: '= R14==0 ? 0 : J22*R22*789300/R14', readOnly: true, className: 'c-mg-l-AN-SAMPLE-CHECKED-UNCHECKED'},
      'V23': {key: 'V23', value: '', expr: '= R14==0 ? 0 : J23*R23*789300/R14', readOnly: true, className: 'c-mg-l-AN-SAMPLE-CHECKED-UNCHECKED'},
      'V24': {key: 'V24', value: '', expr: '= R14==0 ? 0 : J24*R24*789300/R14', readOnly: true, className: 'c-mg-l-AN-SAMPLE-CHECKED-UNCHECKED'},
      'V25': {key: 'V25', value: '', expr: '= R14==0 ? 0 : J25*R25*789300/R14', readOnly: true, className: 'c-mg-l-AN-SAMPLE-CHECKED-UNCHECKED'},
      'V26': {key: 'V26', value: '', expr: '= R14==0 ? 0 : J26*R26*789300/R14', readOnly: true, className: 'c-mg-l-AN-SAMPLE-CHECKED-UNCHECKED'},
      'V27': {key: 'V27', value: '', expr: '= R14==0 ? 0 : J27*R27*789300/R14', readOnly: true, className: 'c-mg-l-AN-SAMPLE-CHECKED-UNCHECKED'},
      'V28': {key: 'V28', value: '', expr: '= R14==0 ? 0 : J28*R28*789300/R14', readOnly: true, className: 'c-mg-l-AN-SAMPLE-CHECKED-UNCHECKED'},
      'V29': {key: 'V29', value: '', expr: '= R14==0 ? 0 : J29*R29*789300/R14', readOnly: true, className: 'c-mg-l-AN-SAMPLE-CHECKED-UNCHECKED'},
      'V30': {key: 'V30', value: '', expr: '= R14==0 ? 0 : J30*R30*789300/R14', readOnly: true, className: 'c-mg-l-AN-SAMPLE-CHECKED-UNCHECKED'},
      'V31': {key: 'V31', value: '', expr: '= R14==0 ? 0 : J31*R31*789300/R14', readOnly: true, className: 'c-mg-l-AN-SAMPLE-CHECKED-UNCHECKED'},
      'V32': {key: 'V32', value: '', expr: '', readOnly: true, className: 'c-mg-l-AN-SAMPLE-CHECKED-UNCHECKED internal-standart'},
      'V33': {key: 'V33', value: '', expr: '', readOnly: true},
      'V34': {key: 'V34', value: '', expr: '', readOnly: true, className:''}, 
      'V35': {key: 'V35', value: '', expr: '', readOnly: true}, 
      'V36': {key: 'V36', value: '', expr: '', readOnly: true},
      'V37': {key: 'V37', value: '', expr: '', readOnly: true},
      'V38': {key: 'V38', value: '', expr: '', readOnly: true, className: ''},
      'V39': {key: 'V39', value: '', expr: '', readOnly: true, className: ''},
      'V40': {key: 'V40', value: '', expr: '', readOnly: true, className: ''},
      'V41': {key: 'V41', value: '', expr: '', readOnly: true, className: ''},

     
      'W2': {key: 'W2', value: 'Concentration,  mg/kg', expr: '', readOnly: true, className:'column-header'},
      'W3': {key: 'W3', value: '', expr: '', readOnly: true, className:'hidden-row'},
      'W4': {key: 'W4', value: 3.645*112.806*497.380*0.896/(1852.000*8.755), expr: '= (S32*R33)==0 ? 0 : Q4*S4*R34*R35/(S32*R33)', readOnly: true, className: 'C-mg-kg-sample-example'},
      'W5': {key: 'W5', value: '', expr: '= (S32*R33)==0 ? 0 : Q5*S5*R34*R35/(S32*R33)', readOnly: true, className: 'C-mg-kg-sample-example'},
      'W6': {key: 'W6', value: '', expr: '= (S32*R33)==0 ? 0 : Q6*S6*R34*R35/(S32*R33)', readOnly: true, className: 'C-mg-kg-sample-example'},
      'W7': {key: 'W7', value: '', expr: '= (S32*R33)==0 ? 0 : Q7*S7*R34*R35/(S32*R33)', readOnly: true, className: 'C-mg-kg-sample-example'},
      'W8': {key: 'W8', value: '', expr: '= (S32*R33)==0 ? 0 : Q8*S8*R34*R35/(S32*R33)', readOnly: true, className: 'C-mg-kg-sample-example'},
      'W9': {key: 'W9', value: 2.581*154.770*497.380*0.896/(1852.000*8.755), expr: '= (S32*R33)==0 ? 0 : Q8*S9*R34*R35/(S32*R33)', readOnly: true, className: 'C-mg-kg-sample-example'},
      'W10': {key: 'W10', value: 1.903*92.946*497.380*0.896/(1852.000*8.755), expr: '= (S32*R33)==0 ? 0 : Q9*S10*R34*R35/(S32*R33)', readOnly: true, className: 'C-mg-kg-sample-example'},
      'W11': {key: 'W11', value: '', expr: '= (S32*R33)==0 ? 0 : Q10*S11*R34*R35/(S32*R33)', readOnly: true, className: 'C-mg-kg-sample-example'},
      'W12': {key: 'W12', value: 2.355*336.436*497.380*0.896/(1852.000*8.755), expr: '= (S32*R33)==0 ? 0 : Q12*S12*R34*R35/(S32*R33)', readOnly: true, className: 'C-mg-kg-sample-example'},
      'W13': {key: 'W13', value: 1.516*402.850*497.380*0.896/(1852.000*8.755), expr: '= (S32*R33)==0 ? 0 : Q13*S13*R34*R35/(S32*R33)', readOnly: true, className: 'C-mg-kg-sample-example'},
      'W14': {key: 'W14', value: 789300, expr: '', readOnly: true, className: 'C-mg-kg-sample-example ethanol'},
      'W15': {key: 'W15', value: '', expr: '= (S32*R33)==0 ? 0 : Q15*S15*R34*R35/(S32*R33)', readOnly: true, className: 'C-mg-kg-sample-example'},
      'W16': {key: 'W16', value: '', expr: '= (S32*R33)==0 ? 0 : Q16*S16*R34*R35/(S32*R33)', readOnly: true, className: 'C-mg-kg-sample-example'},
      'W17': {key: 'W17', value: 1.290*3226.914*497.380*0.896/(1852.000*8.755), expr: '= (S32*R33)==0 ? 0 : Q17*S17*R34*R35/(S32*R33)', readOnly: true, className: 'C-mg-kg-sample-example'},
      'W18': {key: 'W18', value: 1.065*16421.420*497.380*0.896/(1852.000*8.755), expr: '= (S32*R33)==0 ? 0 : Q18*S18*R34*R35/(S32*R33)', readOnly: true, className: 'C-mg-kg-sample-example'},
      'W19': {key: 'W19', value: '', expr: '= (S32*R33)==0 ? 0 : Q19*S19*R34*R35/(S32*R33)', readOnly: true, className: 'C-mg-kg-sample-example'},
      'W20': {key: 'W20', value: 1.161*106.140*497.380*0.896/(1852.000*8.755), expr: '= (S32*R33)==0 ? 0 : Q20*S20*R34*R35/(S32*R33)', readOnly: true, className: 'C-mg-kg-sample-example'},
      'W21': {key: 'W21', value: 1.065*54475.703*497.380*0.896/(1852.000*8.755), expr: '= (S32*R33)==0 ? 0 : Q21*S21*R34*R35/(S32*R33)', readOnly: true, className: 'C-mg-kg-sample-example'},
      'W22': {key: 'W22', value: '', expr: '= (S32*R33)==0 ? 0 : Q22*S22*R34*R35/(S32*R33)', readOnly: true, className: 'C-mg-kg-sample-example'},
      'W23': {key: 'W23', value: '', expr: '= (S32*R33)==0 ? 0 : Q23*S23*R34*R35/(S32*R33)', readOnly: true, className: 'C-mg-kg-sample-example'},
      'W24': {key: 'W24', value: '', expr: '= (S32*R33)==0 ? 0 : Q24*S24*R34*R35/(S32*R33)', readOnly: true, className: 'C-mg-kg-sample-example'},
      'W25': {key: 'W25', value: '', expr: '= (S32*R33)==0 ? 0 : Q25*S25*R34*R35/(S32*R33)', readOnly: true, className: 'C-mg-kg-sample-example'},
      'W26': {key: 'W26', value: '', expr: '= (S32*R33)==0 ? 0 : Q26*S26*R34*R35/(S32*R33)', readOnly: true, className: 'C-mg-kg-sample-example'},
      'W27': {key: 'W27', value: '', expr: '= (S32*R33)==0 ? 0 : Q27*S27*R34*R35/(S32*R33)', readOnly: true, className: 'C-mg-kg-sample-example'},
      'W28': {key: 'W28', value: '', expr: '= (S32*R33)==0 ? 0 : Q28*S28*R34*R35/(S32*R33)', readOnly: true, className: 'C-mg-kg-sample-example'},
      'W29': {key: 'W29', value: '', expr: '= (S32*R33)==0 ? 0 : Q29*S29*R34*R35/(S32*R33)', readOnly: true, className: 'C-mg-kg-sample-example'},
      'W30': {key: 'W30', value: '', expr: '= (S32*R33)==0 ? 0 : Q30*S30*R34*R35/(S32*R33)', readOnly: true, className: 'C-mg-kg-sample-example'},
      'W31': {key: 'W31', value: '', expr: '= (S32*R33)==0 ? 0 : Q31*S31*R34*R35/(S32*R33)', readOnly: true, className: 'C-mg-kg-sample-example'},
      'W32': {key: 'W32', value: '', expr: '', readOnly: true, className: 'C-mg-kg-sample-example internal-standart'},
      'W33': {key: 'W33', value: ' ', expr: '', readOnly: true},
       /* FROM INTERNAL LIST 1*/
      'W34': {key: 'W34', value: '', expr: '', readOnly: true, className: ''},
      'W35': {key: 'W35', value: ' ', expr: '', readOnly: true}, 
      'W36': {key: 'W36', value: ' ', expr: '', readOnly: true},
      'W37': {key: 'W37', value: ' ', expr: '', readOnly: true},
      'W38': {key: 'W38', value: '', expr: '', readOnly: true, className: ''},
      'W39': {key: 'W39', value: '', expr: '', readOnly: true, className: ''},
      'W40': {key: 'W40', value: '', expr: '', readOnly: true, className: ''},
      'W41': {key: 'W41', value: '', expr: '', readOnly: true, className: ''},
    
      
      'X2': {key: 'X2', value: 'Concentration,  mg/L AA', expr: '', readOnly: true, className:'column-header C-mg-l-AA-sample-example-void'},
      'X3': {key: 'X3', value: '', expr: '', readOnly: true, className:'hidden-row C-mg-l-AA-sample-example-void'},
      'X4': {key: 'X4', value: 'No Density Data!', expr: '', readOnly: true, className: 'C-mg-l-AA-sample-example-void'},
      'X5': {key: 'X5', value: 'No Density Data!', expr: '', readOnly: true, className: 'C-mg-l-AA-sample-example-void'},
      'X6': {key: 'X6', value: 'No Density Data!', expr: '', readOnly: true, className: 'C-mg-l-AA-sample-example-void'},
      'X7': {key: 'X7', value: 'No Density Data!', expr: '', readOnly: true, className: 'C-mg-l-AA-sample-example-void'},
      'X8': {key: 'X8', value: 'No Density Data!', expr: '', readOnly: true, className: 'C-mg-l-AA-sample-example-void'},
      'X9': {key: 'X9', value: 'No Density Data!', expr: '', readOnly: true, className: 'C-mg-l-AA-sample-example-void'},
      'X10': {key: 'X10', value: 'No Density Data!', expr: '', readOnly: true, className: 'C-mg-l-AA-sample-example-void'},
      'X11': {key: 'X11', value: 'No Density Data!', expr: '', readOnly: true, className: 'C-mg-l-AA-sample-example-void'},
      'X12': {key: 'X12', value: 'No Density Data!', expr: '', readOnly: true, className: 'C-mg-l-AA-sample-example-void'},
      'X13': {key: 'X13', value: 'No Density Data!', expr: '', readOnly: true, className: 'C-mg-l-AA-sample-example-void'},
      'X14': {key: 'X14', value: '', expr: '', readOnly: true, className: 'C-mg-l-AA-sample-example-void ethanol'},
      'X15': {key: 'X15', value: 'No Density Data!', expr: '', readOnly: true, className: 'C-mg-l-AA-sample-example-void'},
      'X16': {key: 'X16', value: 'No Density Data!', expr: '', readOnly: true, className: 'C-mg-l-AA-sample-example-void'},
      'X17': {key: 'X17', value: 'No Density Data!', expr: '', readOnly: true, className: 'C-mg-l-AA-sample-example-void'},
      'X18': {key: 'X18', value: 'No Density Data!', expr: '', readOnly: true, className: 'C-mg-l-AA-sample-example-void'},
      'X19': {key: 'X19', value: 'No Density Data!', expr: '', readOnly: true, className: 'C-mg-l-AA-sample-example-void'},
      'X20': {key: 'X20', value: 'No Density Data!', expr: '', readOnly: true, className: 'C-mg-l-AA-sample-example-void'},
      'X21': {key: 'X21', value: 'No Density Data!', expr: '', readOnly: true, className: 'C-mg-l-AA-sample-example-void'},
      'X22': {key: 'X22', value: 'No Density Data!', expr: '', readOnly: true, className: 'C-mg-l-AA-sample-example-void'},
      'X23': {key: 'X23', value: 'No Density Data!', expr: '', readOnly: true, className: 'C-mg-l-AA-sample-example-void'},
      'X24': {key: 'X24', value: 'No Density Data!', expr: '', readOnly: true, className: 'C-mg-l-AA-sample-example-void'},
      'X25': {key: 'X25', value: 'No Density Data!', expr: '', readOnly: true, className: 'C-mg-l-AA-sample-example-void'},
      'X26': {key: 'X26', value: 'No Density Data!', expr: '', readOnly: true, className: 'C-mg-l-AA-sample-example-void'},
      'X27': {key: 'X27', value: 'No Density Data!', expr: '', readOnly: true, className: 'C-mg-l-AA-sample-example-void'},
      'X28': {key: 'X28', value: 'No Density Data!', expr: '', readOnly: true, className: 'C-mg-l-AA-sample-example-void'},
      'X29': {key: 'X29', value: 'No Density Data!', expr: '', readOnly: true, className: 'C-mg-l-AA-sample-example-void'},
      'X30': {key: 'X30', value: 'No Density Data!', expr: '', readOnly: true, className: 'C-mg-l-AA-sample-example-void'},
      'X31': {key: 'X31', value: 'No Density Data!', expr: '', readOnly: true, className: 'C-mg-l-AA-sample-example-void'},
      'X32': {key: 'X32', value: '', expr: '', readOnly: true, className: 'C-mg-l-AA-sample-example-void internal-standart'},
      'X33': {key: 'X33', value: ' ', expr: '', readOnly: true}, 
      'X34': {key: 'X34', value: ' ', expr: '', readOnly: true}, 
      'X35': {key: 'X35', value: ' ', expr: '', readOnly: true}, 
      'X36': {key: 'X36', value: ' ', expr: '', readOnly: true},
      'X37': {key: 'X37', value: ' ', expr: '', readOnly: true},
      'X38': {key: 'X38', value: '', expr: '', readOnly: true, className: ''},
      'X39': {key: 'X39', value: '', expr: '', readOnly: true, className: ''},
      'X40': {key: 'X40', value: '', expr: '', readOnly: true, className: ''},
      'X41': {key: 'X41', value: '', expr: '', readOnly: true, className: ''},
    
     
      'Y2': {key: 'Y2', value: 'Concentration, mg/L AA', expr: '', readOnly: true, className:'column-header'},
      'Y3': {key: 'Y3', value: '', expr: '', readOnly: true, className:'hidden-row'},
      'Y4': {key: 'Y4', value: (3.645*112.806*497.380*0.896/(1852.000*8.755))*948060/(10000*40), expr: '= R38==0 ? - : W4*R36/(10000*R38)', readOnly: true, className: 'C-mg-l-AA-sample-example'},
      'Y5': {key: 'Y5', value: '', expr: '= R38==0 ? - : W5*R36/(10000*R38)', readOnly: true, className: 'C-mg-l-AA-sample-example'},
      'Y6': {key: 'Y6', value: '', expr: '= R38==0 ? - : W6*R36/(10000*R38)', readOnly: true, className: 'C-mg-l-AA-sample-example'},
      'Y7': {key: 'Y7', value: '', expr: '= R38==0 ? - : W7*R36/(10000*R38)', readOnly: true, className: 'C-mg-l-AA-sample-example'},
      'Y8': {key: 'Y8', value: '', expr: '= R38==0 ? - : W8*R36/(10000*R38)', readOnly: true, className: 'C-mg-l-AA-sample-example'},
      'Y9': {key: 'Y9', value: (2.581*154.770*497.380*0.896/(1852.000*8.755))*948060/(10000*40), expr: '= R38==0 ? - : W9*R36/(10000*R38)', readOnly: true, className: 'C-mg-l-AA-sample-example'},
      'Y10': {key: 'Y10', value: (1.903*92.946*497.380*0.896/(1852.000*8.755))*948060/(10000*40), expr: '= R38==0 ? - : W10*R36/(10000*R38)', readOnly: true, className: 'C-mg-l-AA-sample-example'},
      'Y11': {key: 'Y11', value: '', expr: '= R38==0 ? - : W11*R36/(10000*R38)', readOnly: true, className: 'C-mg-l-AA-sample-example'},
      'Y12': {key: 'Y12', value: (2.355*336.436*497.380*0.896/(1852.000*8.755))*948060/(10000*40), expr: '= R38==0 ? - : W12*R36/(10000*R38)', readOnly: true, className: 'C-mg-l-AA-sample-example'},
      'Y13': {key: 'Y13', value: (1.516*402.850*497.380*0.896/(1852.000*8.755))*948060/(10000*40), expr: '= R38==0 ? - : W13*R36/(10000*R38)', readOnly: true, className: 'C-mg-l-AA-sample-example'},
      'Y14': {key: 'Y14', value: '', expr: '', readOnly: true, className: 'C-mg-l-AA-sample-example ethanol'},
      'Y15': {key: 'Y15', value: '', expr: '= R38==0 ? - : W15*R36/(10000*R38)', readOnly: true, className: 'C-mg-l-AA-sample-example'},
      'Y16': {key: 'Y16', value: '', expr: '= R38==0 ? - : W16*R36/(10000*R38)', readOnly: true, className: 'C-mg-l-AA-sample-example'},
      'Y17': {key: 'Y17', value: (1.290*3226.914*497.380*0.896/(1852.000*8.755))*948060/(10000*40), expr: '= R38==0 ? - : W17*R36/(10000*R38)', readOnly: true, className: 'C-mg-l-AA-sample-example'},
      'Y18': {key: 'Y18', value: (1.065*16421.420*497.380*0.896/(1852.000*8.755))*948060/(10000*40), expr: '= R38==0 ? - : W18*R36/(10000*R38)', readOnly: true, className: 'C-mg-l-AA-sample-example'},
      'Y19': {key: 'Y19', value: '', expr: '= R38==0 ? - : W19*R36/(10000*R38)', readOnly: true, className: 'C-mg-l-AA-sample-example'},
      'Y20': {key: 'Y20', value: (1.161*106.140*497.380*0.896/(1852.000*8.755))*948060/(10000*40), expr: '= R38==0 ? - : W20*R36/(10000*R38)', readOnly: true, className: 'C-mg-l-AA-sample-example'},
      'Y21': {key: 'Y21', value: (1.065*54475.703*497.380*0.896/(1852.000*8.755))*948060/(10000*40), expr: '= R38==0 ? - : W21*R36/(10000*R38)', readOnly: true, className: 'C-mg-l-AA-sample-example'},
      'Y22': {key: 'Y22', value: '', expr: '= R38==0 ? - : W22*R36/(10000*R38)', readOnly: true, className: 'C-mg-l-AA-sample-example'},
      'Y23': {key: 'Y23', value: '', expr: '= R38==0 ? - : W23*R36/(10000*R38)', readOnly: true, className: 'C-mg-l-AA-sample-example'},
      'Y24': {key: 'Y24', value: '', expr: '= R38==0 ? - : W24*R36/(10000*R38)', readOnly: true, className: 'C-mg-l-AA-sample-example'},
      'Y25': {key: 'Y25', value: '', expr: '= R38==0 ? - : W25*R36/(10000*R38)', readOnly: true, className: 'C-mg-l-AA-sample-example'},
      'Y26': {key: 'Y26', value: '', expr: '= R38==0 ? - : W26*R36/(10000*R38)', readOnly: true, className: 'C-mg-l-AA-sample-example'},
      'Y27': {key: 'Y27', value: '', expr: '= R38==0 ? - : W27*R36/(10000*R38)', readOnly: true, className: 'C-mg-l-AA-sample-example'},
      'Y28': {key: 'Y28', value: '', expr: '= R38==0 ? - : W28*R36/(10000*R38)', readOnly: true, className: 'C-mg-l-AA-sample-example'},
      'Y29': {key: 'Y29', value: '', expr: '= R38==0 ? - : W29*R36/(10000*R38)', readOnly: true, className: 'C-mg-l-AA-sample-example'},
      'Y30': {key: 'Y30', value: '', expr: '= R38==0 ? - : W20*R36/(10000*R38)', readOnly: true, className: 'C-mg-l-AA-sample-example'},
      'Y31': {key: 'Y31', value: '', expr: '= R38==0 ? - : W31*R36/(10000*R38)', readOnly: true, className: 'C-mg-l-AA-sample-example'},
      'Y32': {key: 'Y32', value: '', expr: '', readOnly: true, className: 'C-mg-l-AA-sample-example internal-standart'},
      'Y33': {key: 'Y33', value: '', expr: '', readOnly: true},
      /* FROM INTERNAL LIST 2*/
      'Y34': {key: 'Y34', value: '', expr: '', readOnly: true, className: ''},
      'Y35': {key: 'Y35', value: ' ', expr: '', readOnly: true}, 
      'Y36': {key: 'Y36', value: ' ', expr: '', readOnly: true},
      'Y37': {key: 'Y37', value: ' ', expr: '', readOnly: true},
      'Y38': {key: 'Y38', value: '', expr: '', readOnly: true, className: ''},
      'Y39': {key: 'Y39', value: '', expr: '', readOnly: true, className: ''},
      'Y40': {key: 'Y40', value: '', expr: '', readOnly: true, className: ''},
      'Y41': {key: 'Y41', value: '', expr: '', readOnly: true, className: ''},
    
    /* Dencity data */
     
      'Z1': {key: 'Z1', value: 'Dencity', expr: '', className:'group-header'},
      'Z2': {key: 'Z2', value: 'Dencity,  mg/L', expr: '', readOnly: true, className:'column-header'},
      'Z3': {key: 'Z3', value: '', expr: '', readOnly: true, className:'hidden-row'},
      'Z4': {key: 'Z4', value: '788000', expr: '', readOnly: true, className: 'Dencity'},
      'Z5': {key: 'Z5', value: '793800', expr: '', readOnly: true, className: 'Dencity'},
      'Z6': {key: 'Z6', value: '916800', expr: '', readOnly: true, className: 'Dencity'},
      'Z7': {key: 'Z7', value: '789900', expr: '', readOnly: true, className: 'Dencity'},
      'Z8': {key: 'Z8', value: '917000', expr: '', readOnly: true, className: 'Dencity'},
      'Z9': {key: 'Z9', value: '932000', expr: '', readOnly: true, className: 'Dencity'},
      'Z10': {key: 'Z10', value: '902000', expr: '', readOnly: true, className: 'Dencity'},
      'Z11': {key: 'Z11', value: '805000', expr: '', readOnly: true, className: 'Dencity'},
      'Z12': {key: 'Z12', value: '792800', expr: '', readOnly: true, className: 'Dencity'},
      'Z13': {key: 'Z13', value: '785000', expr: '', readOnly: true, className: 'Dencity'},
      'Z14': {key: 'Z14', value: '789270', expr: '', readOnly: true, className: 'Dencity'},
      'Z15': {key: 'Z15', value: '990000', expr: '', readOnly: true, className: 'Dencity'},
      'Z16': {key: 'Z16', value: '806300', expr: '', readOnly: true, className: 'Dencity'},
      'Z17': {key: 'Z17', value: '804000', expr: '', readOnly: true, className: 'Dencity'},
      'Z18': {key: 'Z18', value: '890000', expr: '', readOnly: true, className: 'Dencity'},
      'Z19': {key: 'Z19', value: '980000', expr: '', readOnly: true, className: 'Dencity'},
      'Z20': {key: 'Z20', value: '870000', expr: '', readOnly: true, className: 'Dencity'},
      'Z21': {key: 'Z21', value: '880000', expr: '', readOnly: true, className: 'Dencity'},
      'Z22': {key: 'Z22', value: '876000', expr: '', readOnly: true, className: 'Dencity'},
      'Z23': {key: 'Z23', value: '802000', expr: '', readOnly: true, className: 'Dencity'},
      'Z24': {key: 'Z24', value: '810000', expr: '', readOnly: true, className: 'Dencity'},
      'Z25': {key: 'Z25', value: '868000', expr: '', readOnly: true, className: 'Dencity'},
      'Z26': {key: 'Z26', value: '1020000', expr: '', readOnly: true, className: 'Dencity'},
      'Z27': {key: 'Z27', value: '903000', expr: '', readOnly: true, className: 'Dencity'},
      'Z28': {key: 'Z28', value: '962400', expr: '', readOnly: true, className: 'Dencity'},
      'Z29': {key: 'Z29', value: '867000', expr: '', readOnly: true, className: 'Dencity'},
      'Z30': {key: 'Z30', value: '862000', expr: '', readOnly: true, className: 'Dencity'},
      'Z31': {key: 'Z31', value: '1041900', expr: '', readOnly: true, className: 'Dencity'},
      'Z32': {key: 'Z32', value: '814000', expr: '', readOnly: true, className: 'Dencity'},
      'Z33': {key: 'Z33', value: '998230', expr: '', readOnly: true, className: ''},
     
      /* sample mass */
      'Z34': {key: 'Z34', value: '', expr: '', readOnly: true, className: ''},
    
      /* sample volume */
      'Z35': {key: 'Z35', value: '', expr: '', readOnly: true, className: ''},
      'Z36': {key: 'Z36', value: '', expr: '', readOnly: true, className: ''},
      'Z37': {key: 'Z37', value: '', expr: '', readOnly: true, className: ''},
      'Z38': {key: 'Z38', value: '', expr: '', readOnly: true, className: ''},
      'Z39': {key: 'Z39', value: '', expr: '', readOnly: true, className: ''},
      'Z40': {key: 'Z40', value: '', expr: '', readOnly: true, className: ''},
      'Z41': {key: 'Z41', value: '', expr: '', readOnly: true, className: ''},    
    }  
} 
  


  generateGrid() {
      const grid = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41].map((row, i) => 
      ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N','O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X','Y'].map((col, j) => {       
        const cols = ['B', 'D', 'E', 'F', 'H', 'I', 'J', 'K', 'L', 'N','O', 'P', 'Q', 'S', 'T', 'U', 'W', 'X','Y'];

        if(i === 1 && cols.indexOf(col) !== -1) {
            return null;
        }

        if(i == 0 && j == 0) {
          return {readOnly: true, value: ''}
        }
        if(row === 0) {
          return {readOnly: true, value: col}
        } 
        if(j === 0) {
          return {readOnly: true, value: row}
        }
        return this.state[col + row] || null
      })
    );

      grid[1].splice(2, 1);
      grid[1].splice(3, 3);
      grid[1].splice(4, 5);
      grid[1].splice(5, 4);
      grid[1].splice(6, 3);
      grid[1].splice(7, 3);
      return grid;
  }

  validateExp(trailKeys, expr) {
    let valid = true;
    const matches = expr.match(/[A-Z][0-9]+/g) || [];
    matches.map(match => {
      if(trailKeys.indexOf(match) > -1) {
        valid = false
      } else {
        valid = this.validateExp([...trailKeys, match], this.state[match].expr)
      }
    })
    return valid
  }

  computeExpr(key, expr, scope) {
    let value = null;
    if(expr.charAt(0) !== '=') {
      return {value: expr, expr: expr};
    } else {
      try {
        value = mathjs.eval(expr.substring(1), scope)
      } catch(e) {
        value = null
      }

      if(value !== null && this.validateExp([key], expr)) {
        return {value, expr}
      } else {
        return {value: 'error', expr: ''}
      }
    }
  }

  cellUpdate(state, changeCell, expr) {
    const scope = _.mapValues(state, (val) => isNaN(val.value) ? 0 : parseFloat(val.value))
    const updatedCell = _.assign({}, changeCell, this.computeExpr(changeCell.key, expr, scope))
    state[changeCell.key] = updatedCell

    _.each(state, (cell, key) => {
      if(cell.expr.charAt(0) === '=' && cell.expr.indexOf(changeCell.key) > -1 && key !== changeCell.key) {
        state = this.cellUpdate(state, cell, cell.expr)        
      }      
    })
    return state
  }

  onCellsChanged(changes) {
    const state = _.assign({}, this.state)
    changes.forEach(({cell, value}) => {
      this.cellUpdate(state, cell, value)
    })
    this.setState(state)
  }

  render() {
    const valueRender = (cell, i, j) => {

     
     if(!isNaN(parseFloat(cell.value)) && isFinite(cell.value) && cell.value > 0 && i > 1 && j > 1) {
        const rounded = parseFloat(cell.value).toFixed(3);
        
        if(rounded == parseInt(cell.value)) {
          return cell.value;
        }

        return rounded;
     
      }

       return cell.value;
    };

    const dataRender = (cell) => {
        return cell.expr;
 

    };

    return (
      
      <table>
        <tbody>
          <tr>
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js">
          </script>
          </tr>
          <tr>
            <Datasheet
              data={this.generateGrid()}
              valueRenderer={valueRender}
              dataRenderer={dataRender}
               onCellsChanged={this.onCellsChanged}>
            </Datasheet> 
          </tr>
          <tr>
            <Checkbox id="checkbox1" className='user-checkbox'
                onChange={userCheckboxOnChange} />
          </tr>
          <tr>
          <Checkbox id="checkbox1" className='tab-user-checkbox'
                onChange={tabUserCheckboxOnChange} />
          </tr>
          <tr><script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script></tr>
        </tbody>
      </table>     
          
    )
  }
  }
