import React from 'react'
import{
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState

} from 'react-accessible-accordion'
import 'react-accessible-accordion/dist/fancy-example.css'
import { MdOutlineArrowDropDown } from 'react-icons/md'
import './Value.css'
import data from '../../utils/accordion'

const Value = () => {
  return (
    
    <section className='v-wrapper'>
        <div className="paddings innerWidth flexCenter v-container">
            <div className="v-left">
                <div className="image-container">
                    <img src="./value.png" alt="" />
                </div>
            </div>
            <div className=" flexColStart v-right">
                <span className='orangeText'>Our Value</span>
                <span className='primaryText'>Value we give to you</span>
                <span className='secondaryText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</span>
                <Accordion classNam="Accordian" allowMultipleExpanded={false} 
                preExpanded={[0]}>
                {
                    data.map((item, i)=>{
                        return(
                            <AccordionItem className='accordianItem' key={i} uuid={i}>
                                <AccordionItemHeading>
                                   
                                    <AccordionItemButton className='flexCenter accordionButton'>
                                        <div className="flexCenter icon">{item.icon}</div>
                                        <span className='primaryText1'>
                                            {item.heading}
                                        </span>
                                        <div className="flexCenter icon">
                                            <MdOutlineArrowDropDown size={30}/>
                                        </div>

                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p className='secondaryText'>{item.detail}</p>
                                
                                

                                </AccordionItemPanel>

                            </AccordionItem>

                        );
                        
                    

                    })

                }


                </Accordion>
            </div>
        </div>
        
    </section>
  )
}

export default Value