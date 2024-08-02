
variable "key_name" {
  description = "Key pair name"
}

variable "instance_type" {
  type = string
  default = "t2.micro"
}
variable "private_key_path" {
  description = "Path to the private key file"
  default     = "./aura.pem"
}
variable "vpc_id" {
  description = "VPC ID"
  type        = string
}

variable "public_subnet_ids" {
  description = "List of public subnet IDs"
  type        = list(string)
}

variable "private_subnet_id" {
  description = "Private subnet ID for bastion host"
  type        = string
}

variable "web_ami" {
  description = "AMI ID for the web application instances"
  type        = string
}

