const withMT = require("@material-tailwind/react/utils/withMT");
/** @type {import('tailwindcss').Config} */
module.exports = withMT(
  {
    mode: 'jit',
    content: [
      './src/**/*.{js,jsx,ts,tsx}',
      // "./node_modules/flowbite/**/*.js",
      "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
      "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
      "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {}
    },
    variants: {},
    plugins: [require('flowbite/plugin'),
    require('tailwindcss-animated')
    ],

  }
)
// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   mode: 'jit',
//   purge: [
//     './src/**/*.{js,jsx,ts,tsx}'
//   ],
//   theme: {
//     extend: {}
//   },
//   variants: {},
//   plugins: [require('flowbite/plugin')],
//   content: ["./node_modules/flowbite/**/*.js"]
// }