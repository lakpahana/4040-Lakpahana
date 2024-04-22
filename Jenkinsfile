pipeline {
    agent any
    
    stages {
        stage('Get from SCM') {
            steps {
                git 'https://github.com/lakpahana/4040-Lakpahana'
            }
        }
        
        stage('Dockerize the application') {
            steps {
                sh 'sudo docker build -t ground-booking .'
            }
        }
        
        stage('Containerize the application') {
            steps {
                sh 'sudo docker run -d  -p 4200:4200 ground-booking'
            }
        }
    }
}