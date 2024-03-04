import React from 'react'
import { Button } from '@mui/material'
const AddProduct = () => {
    return (
        <>
            <form>
                <div className="row">
                    <div className="col-md-3 mb-2">
                        <input type="text" class="form-control shadow-none" placeholder='Prduct Name' />
                    </div>
                    <div className="col-md-3 mb-2">
                        <input type="text" class="form-control shadow-none" placeholder='Description' />
                    </div>
                    <div className="col-md-3 mb-2">
                        <input type="text" class="form-control shadow-none" placeholder='Price' />
                    </div>
                    <div className="col-md-3 mb-2">
                        <Button variant="contained" >
                            Submit
                        </Button>
                    </div>
                </div>
            </form>

            <div>
                
            </div>
        </>
    )
}

export default AddProduct