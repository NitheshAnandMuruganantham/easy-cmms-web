import { Field, Form, Formik } from "formik";
import { TextField } from "formik-mui";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Loader from "../../components/loading";
import axios from "../../utils/axios";
import { processSubdomain } from "../../utils/multitendancy";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://infraweigh.co/">
        infraweigh.co
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function SignInSide() {
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(false);

  return (
    <>
      <Loader open={loading} setOpen={() => null} />
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(https://source.unsplash.com/random/?office)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Formik
            validateOnChange
            onSubmit={async ({ email, password }, { setFieldError }) => {
              const org_key = processSubdomain();
              console.log(email, password, org_key);
              try {
                setLoading(true);
                toast.clearWaitingQueue();
                const data = await axios.post("/auth/login", {
                  email,
                  password,
                  org_id: org_key || null,
                });
                localStorage.setItem("token", data.data.access_token);
                localStorage.setItem("refresh_token", data.data.refresh_token);
                window.location.href = "/";
              } catch (error) {
                toast.error("Invalid email or password");
                setFieldError("password", "");
              } finally {
                setLoading(false);
              }
            }}
            validationSchema={Yup.object().shape({
              email: Yup.string()
                .email("Invalid email address")
                .required("Email is required"),
              password: Yup.string().required("Password is required"),
            })}
            initialValues={{
              email: "",
              password: "",
            }}
          >
            {({ values }) => (
              <Form>
                <Box
                  sx={{
                    my: 8,
                    mx: 4,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                    <LockOutlinedIcon />
                  </Avatar>
                  <Typography component="h1" variant="h5">
                    Sign in
                  </Typography>
                  <Box sx={{ mt: 1 }}>
                    <Field
                      component={TextField}
                      margin="normal"
                      fullWidth
                      name="email"
                      label="email"
                      autoComplete="email"
                      autoFocus
                    />
                    <Field
                      component={TextField}
                      margin="normal"
                      fullWidth
                      name="password"
                      label="password"
                      type="password"
                      autoComplete="off"
                      autoFocus
                    />

                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                    >
                      Sign In
                    </Button>
                    <Grid container>
                      <Grid item xs>
                        <Link href="/forgetPassword" variant="body2">
                          Forgot password?
                        </Link>
                      </Grid>
                    </Grid>
                    <Copyright sx={{ mt: 5 }} />
                  </Box>
                </Box>
              </Form>
            )}
          </Formik>
        </Grid>
      </Grid>
    </>
  );
}
