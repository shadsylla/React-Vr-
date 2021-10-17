import React from 'react'

const main = () => {
    return (
        <view> 
                <Pano Source={
                    {
                        uri: [
                            '../static_assets/lab_rt.jpg'; 
                            '../static_assets/lab_lt.jpg'; 
                            '../static_assets/lab_up.jpg'; 
                            '../static_assets/lab_dn.jpg'; 
                            '../static_assets/lab_bk.jpg'; 
                            '../static_assets/lab_ft.jpg'; 
                            
                        ]
                        } }
                /> // closing Pano    

                


        </view>
            
        
    ); 
}

export default main
