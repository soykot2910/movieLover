import React from "react";

const Footer = () => {
  return (
    <footer class="p-4">
      <div className="container !flex shadow  md:items-center md:justify-between md:p-6 ">
        <span class="text-sm text-gray-500 sm:text-center ">
          © 2022{" "}
          <a href="https://flowbite.com/" class="hover:underline">
            soykot
          </a>
          . All Rights Reserved.
        </span>
        <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-500  sm:mt-0">
          <li>
            <a href="#" class="mr-4 hover:underline md:mr-6 ">
              About
            </a>
          </li>
          <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">
              Licensing
            </a>
          </li>
          <li>
            <a href="#" class="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
