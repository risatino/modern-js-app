### Windows Install Python & Virtual Environments

* Make sure when you install Python on a Windows environment, you include the *PATH* box

* Create a virtual environment that will run *Python 3.6.* This will help solve issues where students have multiple versions of Python installed.

* First run ```conda create -n PythonData python=3.6 anaconda``` in terminal. Warn students that this may take a few minutes to install.

* Now enter ```source activate PythonData``` to activate the environment. When ```(PythonData)$``` appears, this means you are in the environment.

* Now make sure everyone is using the correct version of Python by entering ```python --version```

* Lastly, show that you can exit the environment by entering ```source deactivate```