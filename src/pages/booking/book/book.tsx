import React from "react"
import MyCalendar from "../../../components/Callender"
import  Form  from "../../../components/Forms/Form"
export default function Book () {
    localStorage.getItem("user")
    return <>
    <div className="flex bg-slate-100 py-9">
    <Form/>
    </div>
    </>
}