import React from 'react'

const SearchSection = () => {
    return (
        <>
            <div className='center'>
                <div class="container border card p-5">
                    <div class="row">
                        <span className='text-muted fs-4 text-center'>Open the door to endless career possibilities - your next big opportunity awaits!</span>
                        <div class="col-md-10 ">
                            <div class="row g-2">
                                <div class="col-md-6">
                                    <input type="text" class="form-control-default " placeholder="Job title , Keyword , Company" />
                                </div>
                                <div class="col-md-6">
                                    <input list='location' className='form-control-default' placeholder='State , City ,zipcode' />
                                    <datalist id="location">
                                        <option className='opt'   value="Edge"></option>
                                        <option className='opt' value="Firefox"></option>
                                        <option className='opt' value="Chrome"></option>
                                        <option className='opt' value="Opera"></option>
                                        <option className='opt' value="Safari"></option>
                                    </datalist>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-2"  >
                            <button class="btn bgbtn w-100 h-100 ">Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default SearchSection