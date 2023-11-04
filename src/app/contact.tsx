import { Alert, Snackbar } from "@mui/material";
import React, { useState } from "react";
import { MdMarkEmailRead } from "react-icons/md";
import { MdContacts } from "react-icons/md";
import AppWrap from "./AppWrap";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [openSnackBar, setOpenSnackBar] = useState(false);
  const [formResMsg, setFormResMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name || !email || !message) return;

    try {
      const res = await fetch("https://formspree.io/f/xleyonog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });
      const result = await res.json();
      if (result.ok) {
        setOpenSnackBar(true);
        setFormResMsg("Your Message has been Sent 🎉");
      } else throw new Error("An error occured, Try again 😢");
    } catch (error: any) {
      console.log("Error", error);
      setOpenSnackBar(true);
      setFormResMsg(error);
    } finally {
      setName("");
      setEmail("");
      setMessage("");
    }
  }
  return (
    <div className="py-8 dark:bg-black " id="ContactMe">
      <div className="gradient dark:hidden h-10">&nbsp;</div>
      <h1 className="text-4xl dark:text-white text-center capitalize font-extrabold mt-20 px-3">
        Take a Coffee & Chat with me
      </h1>
      <div className="my-12 mx-auto mt-16 flex md:flex-row flex-col justify-center items-center gap-9">
        <p className="bg-rose-100 xl:px-14 px-10 xl:py-7 py-5 rounded-md flex w-fit md:w-auto justify-center items-center gap-2">
          <span className="w-10 aspect-square">
            <MdMarkEmailRead className="h-full w-full fill-rose-700" />
          </span>
          aramramadan7@gmail.com
        </p>
        <p className="bg-primary xl:px-14 px-10 xl:py-7 py-5 rounded-md flex w-fit md:w-auto justify-center items-center gap-2">
          <span className="w-10 aspect-square">
            <MdContacts className="h-full w-full fill-slate-700" />
          </span>
          +234-90-395-185-28
        </p>
      </div>
      <div>
        <form
          // action="https://formsubmit.co/ebf48cd4fbe5e14b3d677baf1d5e9925"
          onSubmit={handleSubmit}
          // action="https://formspree.io/f/xleyonog"
          target="_blank"
          method="post"
          className="w-[65%] mx-auto flex flex-col gap-4 py-14 justify-center"
        >
          <div>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Your Name"
              className="min-w-full bg-primary p-5 rounded-md outline-none focus:ring-4 focus:ring-secondary"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Your Email"
              className="min-w-full bg-primary p-5 rounded-md outline-none focus:ring-4 focus:ring-secondary"
            />
          </div>
          <div>
            <textarea
              placeholder="Your Message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="min-w-full bg-primary p-5 rounded-md min-h-[20rem] outline-none focus:ring-4 focus:ring-secondary"
            />
          </div>
          <button className="bg-secondary rounded-lg text-white font-semibold px-6 py-3 w-fit mx-auto">
            Send Message
          </button>
        </form>
      </div>
      <Snackbar
        open={openSnackBar}
        anchorOrigin={{ horizontal: "center", vertical: "top" }}
        autoHideDuration={6000}
        onClose={() => setOpenSnackBar(false)}
      >
        <Alert onClose={() => setOpenSnackBar(false)}>{formResMsg}</Alert>
      </Snackbar>

      <footer className="relative text-sm">
        <p className="sm:absolute text-center sm:text-right capitalize sm:bottom-0 sm:right-3 text-gray-600">
          © 2023 abduRahman Aramide
          <br />
          ALL RIGHTS RESERVED
        </p>
      </footer>
    </div>
  );
}

export default AppWrap(Contact, "ContactMe");
