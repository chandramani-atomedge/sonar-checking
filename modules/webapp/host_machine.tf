
resource "aws_instance" "host_machine" {
  ami             = var.web_ami
  instance_type   = var.instance_type
  subnet_id       = var.public_subnet_ids[0]
  key_name        = aws_key_pair.generated_key.key_name
  security_groups = [aws_security_group.host_machine_sg.id]

  tags = {
    Name = "normal-instance"
  }
}
