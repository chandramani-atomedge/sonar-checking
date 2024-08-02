# Output the Bastion security group ID
output "bastion_sg_id" {
  value = aws_security_group.bastion_sg.id
}

# Output the host machine security group ID
output "host_machine_sg_id" {
  value = aws_security_group.host_machine_sg.id
}

# Output the Bastion host instance ID
output "bastion_host_id" {
  value = aws_instance.bastion.id
}

# Output the host machine instance ID
output "host_machine_id" {
  value = aws_instance.host_machine.id
}

output "keypair"{
    value = aws_key_pair.generated_key.key_name
}