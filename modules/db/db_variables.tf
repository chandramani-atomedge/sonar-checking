variable "vpc_id" {
  description = "VPC ID"
  type        = string
}

variable "private_subnet_ids" {
  description = "List of private subnet IDs"
  type        = list(string)
}

variable "bastion_sg_id" {
  description = "Security group ID of the Bastion host"
  type        = string
}

variable "db_ami" {
  description = "AMI ID for the DB instances"
  type        = string
}

variable "instance_type" {
  description = "Instance type for the DB instances"
  type        = string
  default     = "t3.micro"
}

variable "keypair" {
  description = "Key pair name for SSH access"
  type        = string
}
variable "key_name" {
  description = "Key pair name for SSH access"
  type        = string
}
