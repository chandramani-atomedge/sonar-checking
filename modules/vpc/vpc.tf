#VPC
resource "aws_vpc" "main" {
  cidr_block = "${var.ip_range}.0.0/16"

  tags = {
    Name = "AURA-CLOUD VPC"
  }
}