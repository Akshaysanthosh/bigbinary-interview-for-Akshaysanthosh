import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import React, { useState,useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Button } from "primereact/button";
import { useForm } from "react-hook-form";
import {ToastContainer} from 'react-toastify';



const DataTableContainer = (props) => {

		   const initialSetter=()=> {
           }

            useEffect(() => {
				initialSetter()
			}, []);


	return (
		<React.Fragment>
			<section>
				<div>

				</div>
			</section>
		</React.Fragment>
	)
};
export default DataTableContainer