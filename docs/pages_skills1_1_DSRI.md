# Getting started with the DSRI (DCU4008)

[DSRI](https://dsri.maastrichtuniversity.nl) is the *Data Science Research Infrastructure* provided my Maastricht University. Although getting started with DSRI is a bit challenging for most students, it is well worth the effort! DSRI allows you to easily re-use the Python code provided by your teacher without any installations on your own machine. DSRI makes use of [Docker](https://docs.docker.com) containers, which hold all the parts a program needs to run. Once you have set up your own project on DSRI, using the so-called Docker image we provide, you will have all the necessary components in place and the risk of technical errors is reduced. You will save a lot of time going forward. Moreover, DSRI makes it much easier for us to work together as a group.

So be patient with yourselves if logging in to DSRI and starting your project does not work the first time you try --- your teacher is there to help and, in previous years, all students got there eventually! The different steps for launching your project are explained below. Please look at the screenshots carefully.

## Step 1 - Log in to DSRI

You must be connected to the UM network to access the DSRI.

- Connect to the UM VPN Maastricht University [VPN client](http://vpn.maastrichtuniversity.nl).
- Access the DSRI web UI at **https://console-openshift-console.apps.dsri2.unimaas.nl** (page gives you an error when accessed OUTSIDE the UM network)
- Your username (1) will always be your student ID at Maastricht University (a.k.a. your I-number), e.g. I6000000.
- Use your general UM password.

![Login Screenshot](../screenshots_dsri/image.png)

## Step 2 - Create a project

- Select the *Administrator* perspective from the DSRI Dashboard menu, and click *Create Project* (2).
- In the Create Project dialogue box, enter a unique name in the Name field (3). Use a short and meaningful name for your project as the project identifier is unique across all projects. A good practice is: `<project name>-<your student I-number>`.
- Optionally add a *Display Name* and a *Description* for the project.
- Click *Create*.

![Create Project Screenshot](../screenshots_dsri/image-1.png)

## Step 3 - Instantiate the Jupyter Notebook image

- Select the *Developer* perspective from the DSRI Dashboard menu, and make sure that your project is selected in the drop-down list (1).
- Click on *Add* (2) and select *All services* from the *Developer Catalog* (3).
- Search for "Jupyter" (4) and select the JupyterLab template (5).
- Click on *Instantiate Template* (6).

![Instantiate Jupyter Screenshot](../screenshots_dsri/image-2.png)

When instantiating the template, you will need to provide some parameters, such as:

- Name of the application: `<course-id>-<application-name>` (7).
- Choose a password to access the notebook with the script you are going to run (8).
- Specify the Docker image to use for the notebook: `ghcr.io/maastrichtu-ids/jupyterlab:knowledge-graph` (9).
- URL of Git repository: `https://gitlab.maastrichtuniversity.nl/the-plant/dcu4008-2024-machines-of-knowledge.git` (10).
- Enter your username as *Git name* and your UM email as *Git email* (11).
- Click on *Create*. It will take a few seconds (up to 1 minute) to get your notebook environment up and running.

![Parameter Screenshot](../screenshots_dsri/image-3.png)

## Step 4 - Launch the Jupyter Notebook environment

- Select *Topology* in the left bar menu, and click on the name of your application (Step 3) (12).
- The link under the heading *Routes* on the right side will launch the JupyterLab environment in your web browser (13).

![Launch Jupyter Screenshot](../screenshots_dsri/image-4.png)

## Step 5 - Run your script

- On the left is the File Explorer. The folder *persistent* (14) is your personal space on the DSRI for this project. In the folder *notebooks* (15) you will find the Apple Web Scraper script that we will be using in this course. Double-click on the file to open the Jupyter notebook where you can run the script. You can upload and download files from the File Explorer.
- In the main *Launcher* window, you can launch *OpenRefine* (16), a web-based tool for exploring, analyzing, and cleaning up your data. (If you accidentally close the Launcher window, you can easily reopen another one from the top menu *File > New Launcher*).

![File Explorer Screenshot](../screenshots_dsri/image-5.png)

>[!NOTE]
> Always download your datasets to your local machine and make sure to have backups!**

🙌 These instructions were provided by Arnoud Wils (The Plant, FASoS). 

# Restarting a pod after not using DSRI for a longer period of time

In order to save resources, our IT department at Maastricht University scales down unused pods, so when you log in to DSRI after a longer period of time, you can still find the project, but all the active pods are gone. Please do not worry: this is common practice and does not mean that your data are lost. You can easily restart the pod and continue from where you left off by scaling it from "0" "1" under ```details``` after clicking the pod. If you find this too difficult to handle, you can also contact the DSRI support at Maastricht University to do this for you.
Other institutional coding infrastructures running on Kubernetes most likely have similar procedures. Advanced users who can manage a Linux command line can also open the terminal for their respective project and restart the pod there.

Here is what restarting an OCR4all project hosted on the UM DSRI looked like in the terminal:

## Welcome message in the terminal after opening it

```Welcome to the OpenShift Web Terminal. Type "help" for a list of installed CLI tools.```

## Command to check for active pods in bash-4.4

```kubectl get pods```

This retrieved the following status information:

```
NAME           READY   STATUS    RESTARTS   AGE
workspace$$$   2/2     Running   0          2m36s
```

## Command to see deployments within the project

```kubectl get deployments```

In our case, two deployments were available:

```
NAME                        READY   UP-TO-DATE   AVAILABLE   AGE
ocr4all-$$$           0/0     0            0           451d
workspace$$$   1/1     1            1           3m24s
```
## Command to scale pod for selected project to "1"

```kubectl scale deployment ocr4all-p70088617 --replicas=1```

## Further Readings

The following works provide theoretical and methodological context to show why data cleaning and preparation in DSRI are essential steps before analysis.

- Ignatow, G., & Mihalcea, R. (2018). *An introduction to text mining: Research design, data collection, and analysis.* Sage. https://doi.org/10.4135/9781506336985
- Piotrowski, M. (2012). *Natural language processing for historical texts.* Springer. https://doi.org/10.1007/978-3-031-02146-6
- Schöch, C. (2013). Big? Smart? Clean? Messy? Data in the humanities. *Journal of Digital Humanities, 2*(3). http://journalofdigitalhumanities.org/2-3/big-smart-clean-messy-data-in-the-humanities/
