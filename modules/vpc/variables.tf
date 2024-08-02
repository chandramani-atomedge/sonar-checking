# Define variable for region
variable "aws_region" {
  description = "The AWS region to deploy resources in"
  type        = string
  default     = "ap-south-1"
}

variable "ip_range" {
    description = "The IP range to use for the VPC"
    type        = string
    default = "10.0"
}
locals {
  azs = [
    "${var.aws_region}a",
    "${var.aws_region}b",
    "${var.aws_region}c",

  ]

  public_subnet_cidrs = [
    "${var.ip_range}.1.0/24",
    "${var.ip_range}.2.0/24"
  ]

  private_subnet_cidrs = [
    "${var.ip_range}.4.0/24",
    "${var.ip_range}.5.0/24",
    "${var.ip_range}.6.0/24"
  ]
}
