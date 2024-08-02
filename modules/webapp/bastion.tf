# Bastion Host
resource "aws_instance" "bastion" {
  ami             = var.web_ami
  instance_type   = var.instance_type
  subnet_id       = var.private_subnet_id
  key_name        = aws_key_pair.generated_key.key_name
  security_groups = [aws_security_group.bastion_sg.id]

  tags = {
    Name = "bastion-host"
  }
}
