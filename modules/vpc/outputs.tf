output "vpc_id" {
  value = aws_vpc.main.id
}

output "public_subnet_ids" {
  value = aws_subnet.public_subnets[*].id
}

output "host_public_id" {
  value = aws_subnet.public_subnets[1].id
}

output "private_subnet_ids" {
  value = aws_subnet.private_subnets[*].id
}
