terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
  #we can use this if the bucket is already created
  backend "s3" {
    bucket = "elasticbeanstalk-ap-south-1-270124469321"
    key    = "terraform.tfstate"
    region = "ap-south-1"
  }
}

provider "aws" {
  region = "ap-south-1"
}

