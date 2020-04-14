import React, { Component } from 'react'
import {
    EuiButtonEmpty,
    EuiContextMenuItem,
    EuiContextMenuPanel,
    EuiFlexGroup,
    EuiFlexItem,
    EuiPagination,
    EuiPopover,
  } from '@elastic/eui';
  
class CustomPagination extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            activePage:0,
            isPopoverOpen:false,
            PAGE_COUNT :10
        }
    }
    
   
    goToPage = pageNumber =>{

        this.setState({
            activePage:pageNumber
        })
        console.log(pageNumber)
    } 
   onButtonClick = () => {
       this.setState(prevs=>{
           return {isPopoverOpen:!prevs.isPopoverOpen}
       })
       console.log("object")

   }
   closePopover = () => {
       this.setState({isPopoverOpen:false})
   }

    
    render() {

        const items = [
            <EuiContextMenuItem
              key="10 rows"
              icon="empty"
              onClick={() => {
                this.closePopover();
                window.alert('10 rows');
              }}>
              10 rows
            </EuiContextMenuItem>,
            <EuiContextMenuItem
              key="20 rows"
              icon="empty"
              onClick={() => {
                this.closePopover();
                window.alert('20 rows');
              }}>
              20 rows
            </EuiContextMenuItem>,
            <EuiContextMenuItem
              key="50 rows"
              icon="check"
              onClick={() => {
                this.closePopover();
                window.alert('50 rows');
              }}>
              50 rows
            </EuiContextMenuItem>,
            <EuiContextMenuItem
              key="100 rows"
              icon="empty"
              onClick={() => {
                this.closePopover();
                window.alert('100 rows');
              }}>
              100 rows
            </EuiContextMenuItem>,
          ];
        
          const button = (
            <EuiButtonEmpty
              size="s"
              color="text"
              iconType="arrowDown"
              iconSide="right"
              onClick={this.onButtonClick}>
              Rows per page: 50
            </EuiButtonEmpty>
          );
        
          let {PAGE_COUNT ,isPopoverOpen}=this.state
        return (
            <EuiFlexGroup justifyContent="spaceBetween" alignItems="center">
            <EuiFlexItem grow={false}>
            <EuiPopover
            button={button}
            isOpen={isPopoverOpen}
            closePopover={this.closePopover}>
           {items.map((item,index)=>{
             return (
               <div key={index}>
                 {item}
               </div>
             )
           })}

            
        </EuiPopover>
            
            </EuiFlexItem>
      
            <EuiFlexItem grow={false}>
              <EuiPagination
                pageCount={PAGE_COUNT}
                activePage={this.state.activePage}
                onPageClick={this.goToPage}
              />
            </EuiFlexItem> 
          </EuiFlexGroup>
        
        )
    }
}

export default CustomPagination