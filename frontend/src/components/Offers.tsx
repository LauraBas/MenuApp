import React from 'react';
import {Button, Accordion, AccordionSummary, AccordionDetails, Typography} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const Offers = function(){
    return(
        <div>
            <h3>Offers</h3>
            <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                        <Typography>Hot offer!</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                            Get 10% off each main and drink combo.
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                        <Typography>Hungry Date Offer!</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                        Get 2 mains + 2 drinks + 1 dessert for 40.00.
                        </Typography>
                        </AccordionDetails>
                    </Accordion>            
        </div>

    )
}
export default Offers