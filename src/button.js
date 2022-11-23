import React from "react";
export const button = () => {
    return (
        <div>
            <button onclick="myFunction()">Try it</button>

            <script>
                function myFunction() {
                    alert("I am an alert box!");
                    }
            </script>
        </div>



    )
}