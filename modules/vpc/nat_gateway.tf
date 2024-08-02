# NAT Gateway
# Create an Elastic IP for the NAT Gateway
resource "aws_eip" "elastic_ip" {
#  vpc = true

  tags = {
    Name = "AURA-CLOUD NAT EIP"
  }
}

# Create the NAT Gateway for Outbound Rules
resource "aws_nat_gateway" "nat_gw" {
  allocation_id = aws_eip.elastic_ip.id
  subnet_id     = element(aws_subnet.public_subnets[*].id, 0)

  tags = {
    Name = "AURA-CLOUD NATGW"
  }
}
