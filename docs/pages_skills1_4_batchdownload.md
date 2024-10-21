# Batch download files from the UM DSRI

To download several files in batch from the UM DSRI, you need to use the command line / terminal. This can be a bit challenging at first.
To find the command line, on Windows computers, you have to click on the search field in your taksbar and type *cmd*.
You will then see an option to open the so-called *command prompt*. With standard user rights, click Command Prompt.
With administrator rights, right-click Command Prompt and select *Run as administrator*.

1) Now you need to log in to DSRI on the command line, using the *oc* command:

[Login in the terminal with oc](https://dsri.maastrichtuniversity.nl/docs/openshift-install/#login-in-the-terminal-with-oc)

2) The next step is to point to correct project by typing:
```
$ oc get projects
$ oc project <project name>
```
3) To find the correct POD id, type
```
$ oc get pods
```
4) Now connect to POD with
```
$ oc rsh <POD_ID>
```
5) You can zip folders or files on the command line with the tar command:

[How to compress and extract files using the tar command](https://www.howtogeek.com/248780/how-to-compress-and-extract-files-using-the-tar-command-on-linux/)

6) In the final step, you can download your folders or files from the POD to your local drive:

[Copy from pod to local](https://dsri.maastrichtuniversity.nl/docs/openshift-load-data#copy-from-pod-to-local)
