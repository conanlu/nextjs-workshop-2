# T4SG Next.js/React Workshop 2 Activity
Created by Conan Lu for Tech for Social Good. Reach out to conanlu@college.harvard.edu for any questions.

---

## Setup

#### Clone repository

`cd` into a desired destination folder, then clone the repo (preferably using SSH):

```shell
git clone git@github.com:hcs-t4sg/starter-project-2023-v2.git
```

#### Package installation

1. Open the project folder in VSCode. You can do so with the following terminal shortcut:

   ```bash
   # Navigate into the project directory
   cd starter-project-2023-v2

   # Open in VSCode
   code .

   # If the second command gives you an error, you probably don't have the VS Code 'code' keyword added to your PATH variable. Follow this tutorial:
   # https://www.freecodecamp.org/news/how-to-open-visual-studio-code-from-your-terminal/#:~:text=Once%20your%20terminal%20is%20open,Then%20hit%20enter%20.&text=Once%20you%20hit%20enter%20%2C%20VS%20Code%20will%20now%20open.
   ```

2. Open a terminal in the project folder by dragging up from the bottom of the code window or by going to `Terminal > New Terminal` in the menu bar.

3. Run: `npm install` (`npm i` for short)

   - If you get something like "command not found", you might not have `npm` installed.

- If successful you should see something like:

  ```bash
  added 414 packages, and audited 415 packages in 13s

  149 packages are looking for funding
  run `npm fund` for details

  found 0 vulnerabilities
  ```

4. You should see a popup in the bottom right prompting you to install recommended extensions. Please install these, they'll be helpful for code formatting and developing the webapp. You can also view the recommended extensions in the extensions sidebar (`cmd + shift + X`.)

5. You will also get a prompt to use the workspace's Typescript version; accept it. If you don't get one, or if you get an error that the path "does not point to a valid tsserver install", make sure you're using the workspace's Typescript version by pressing `cmd` + `shift` + `P` and typing "typescript", selecting `Typescript: Select Typescript Version`, and selecting `Use Workspace Version`.

#### Supabase Connection Setup

1. Visit the Supabase website, create an account (or login if you already have one), and create a new project. You will be prompted to set a **Database Password; remember it**. Wait for your database provisioning and setup to finish.

2. Duplicate the `.env.example` file (into your root project directory) and rename to `.env`. Inside `.env`, set the following variables according to your Supabase project settings:

   - `NEXT_PUBLIC_SUPABASE_URL`: From Project Settings > API > Project URL.
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`: From Project Settings > API > Project API Keys > `anon` `public`.
   - `SECRET_SUPABASE_CONNECTION_STRING`: From Project Settings > Database > Connection String > Nodejs. Replace `[YOUR-PASSWORD]` with your database password.

   The final result should look something like this:

   ```shell
   # Some other comments above
   NEXT_PUBLIC_SUPABASE_URL="https://abcdefghijklmnopqrst.supabase.co"
   NEXT_PUBLIC_SUPABASE_ANON_KEY="longlonglongstring"
   SECRET_SUPABASE_CONNECTION_STRING="postgresql://postgres:YourDatabasePasswordHere@db.abcdefghijklmnopqrst.supabase.co:5432/postgres"
   ```

   You should not share these keys publically, especially the `SECRET_SUPABASE_CONNECTION_STRING`. Note that this project uses a package from the popular [T3 stack](https://create.t3.gg/) to validate and provide typesafety to environment variables in `env.mjs` (more on this below). When using these environment variables in your code, you can import them from `env.mjs`. `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` are used in the codebase itself and are thus included in this file. `SECRET_SUPABASE_CONNECTION_STRING` is used only in a helper script in `package.json` and not in the app itself, so it doesn't need to be validated.


#### Run the webapp

You can run the webapp with the following terminal command:

```bash
# Start the webapp in development mode (usually what you do in development). Exit with Ctrl + C
npm run dev
```
